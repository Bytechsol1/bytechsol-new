const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const puppeteer = require('puppeteer');
const { createApp } = require('../chat-backend/app.cjs');

const project = path.resolve(__dirname, '..');
const compile = file => ts.transpileModule(fs.readFileSync(path.join(project, file), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.React, target: ts.ScriptTarget.ES2020 },
}).outputText;
const apiCode = compile('src/shareable/chatApi.ts');
const widgetCode = compile('src/shareable/ChatWidget.tsx');

async function testEndpointConfiguration() {
  const context = {
    exports: {}, URL, Error,
    window: { location: { hostname: 'bytechsolllc.com' } },
    fetch: async () => ({ ok: true, json: async () => ({ apiUrl: '' }) }),
  };
  vm.createContext(context);
  vm.runInContext(apiCode, context);
  const signal = new AbortController().signal;
  for (const apiUrl of ['', '/api/chat.php', 'http://untrusted.example/api/chat', 'javascript:alert(1)', 'https://user:password@chat.example/api/chat']) {
    context.fetch = async () => ({ ok: true, json: async () => ({ apiUrl }) });
    await assert.rejects(context.exports.getChatApiUrl(signal));
  }
  context.fetch = async () => ({ ok: true, json: async () => ({ apiUrl: 'https://chat.example/api/chat' }) });
  assert.equal(await context.exports.getChatApiUrl(signal), 'https://chat.example/api/chat');
  context.window.location.hostname = 'localhost';
  context.fetch = async () => ({ ok: true, json: async () => ({ apiUrl: '' }) });
  assert.equal(await context.exports.getChatApiUrl(signal), '/api/chat');
  console.log('PASS: production requires a valid HTTPS backend URL; local development uses /api/chat');
}

(async () => {
  await testEndpointConfiguration();
  const react = fs.readFileSync(path.join(path.dirname(require.resolve('react')), 'umd/react.development.js'), 'utf8');
  const dom = fs.readFileSync(path.join(path.dirname(require.resolve('react-dom')), 'umd/react-dom.development.js'), 'utf8');
  const html = `<!doctype html><div id="root"></div><script>${react}</script><script>${dom}</script><script>
    var chatApiExports = {};
    (function(exports) { ${apiCode} })(chatApiExports);
    var exports = {};
    function require(name) {
      if (name === 'react') return React;
      if (name === './chatApi') return chatApiExports;
      if (name === 'lucide-react') return new Proxy({}, {get: function() {return function() {return null;};}});
      if (name.endsWith('.css')) return {};
      throw new Error(name);
    }
    ${widgetCode}
    ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(exports.default));
  </script>`;
  let runtimeConfig = { apiUrl: '' };
  const server = http.createServer((req, res) => {
    if (req.url === '/chat-config.json') {
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(runtimeConfig));
    }
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const frontendOrigin = `http://127.0.0.1:${server.address().port}`;
  const backend = createApp({
    apiKey: 'test-api-key', allowedOrigins: [frontendOrigin],
    fetchImpl: async () => new Response(JSON.stringify({ choices: [{ message: { content: 'Local CORS integration works' } }] })),
  }).listen(0, '127.0.0.1');
  await new Promise(resolve => backend.once('listening', resolve));
  runtimeConfig = { apiUrl: `http://127.0.0.1:${backend.address().port}/api/chat` };
  let browser;
  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.evaluateOnNewDocument(() => {
      if (!localStorage.getItem('test-seeded')) {
        localStorage.setItem('bytechsol-chat-v1', JSON.stringify([
          null, { id: 'bad', sender: 'bot' },
          { id: 'saved', sender: 'bot', text: 'Saved valid message', chips: [null, 42, 'Valid action'] },
        ]));
        localStorage.setItem('test-seeded', 'yes');
      }
      window.mockReply = {};
      window.mode = 'immediate';
      window.heldRequests = [];
      window.requests = [];
      window.fetch = async (url, options = {}) => {
        window.requests.push(url);
        if (url === '/chat-config.json') {
          if (options.cache !== 'no-store') throw new Error('Config must bypass browser cache');
          return { ok: true, json: async () => ({ apiUrl: 'https://chat.example/api/chat' }) };
        }
        if (url !== 'https://chat.example/api/chat') throw new Error('Wrong chat endpoint: ' + url);
        if (window.mode === 'network-error') throw new TypeError('Failed to fetch');
        if (window.mode === 'hold') return new Promise(resolve => window.heldRequests.push(resolve));
        return { ok: true, json: async () => window.mockReply };
      };
    });
    await page.goto(frontendOrigin);
    await page.waitForFunction(() => document.body.textContent.includes('Saved valid message'));
    await page.waitForFunction(() => {
      const saved = JSON.parse(localStorage.getItem('bytechsol-chat-v1'));
      return saved.length === 1 && saved[0].chips.length === 1;
    });
    await page.reload();
    await page.waitForFunction(() => document.body.textContent.includes('Saved valid message'));
    await page.click('.bs-chat-toggle');
    for (const reply of [{}, null, { reply: 42 }, { reply: '  ' }]) {
      await page.evaluate(value => { window.mockReply = value; }, reply);
      await page.type('#bs-chat-input', 'Hello');
      await page.click('.bs-chat-send');
      await page.waitForFunction(() => document.querySelector('.bs-chat-error')?.textContent.includes('invalid response'));
      assert.equal(await page.$$eval('.bs-msg-row.bot', elements => elements.length), 1);
    }
    console.log('PASS: invalid saved messages and API replies cannot crash the widget');
    await page.evaluate(() => { window.mockReply = { reply: 'Contact contact@bytechsol.com or https://bytechsolllc.com/contact/' }; });
    await page.type('#bs-chat-input', 'Contact');
    await page.click('.bs-chat-send');
    await page.waitForSelector('.bs-msg-bubble a[href="mailto:contact@bytechsol.com"]');
    assert.equal(await page.$$eval('.bs-chat-error', elements => elements.length), 0);
    assert.ok((await page.evaluate(() => window.requests)).includes('https://chat.example/api/chat'));
    console.log('PASS: runtime config connects to the external backend and renders valid linked replies');

    await page.click('[aria-label="Start a new chat"]');
    await page.evaluate(() => { window.mode = 'hold'; });
    await page.type('#bs-chat-input', 'Old request');
    await page.click('.bs-chat-send');
    await page.waitForFunction(() => window.heldRequests.length === 1);
    await page.click('[aria-label="Start a new chat"]');
    await page.type('#bs-chat-input', 'New request');
    await page.click('.bs-chat-send');
    await page.waitForFunction(() => window.heldRequests.length === 2);
    await page.evaluate(() => window.heldRequests[0]({ ok: true, json: async () => ({ reply: 'STALE RESPONSE' }) }));
    await page.waitForFunction(() => document.querySelector('#bs-chat-input').disabled);
    assert.equal(await page.evaluate(() => document.body.textContent.includes('STALE RESPONSE')), false);
    await page.evaluate(() => window.heldRequests[1]({ ok: true, json: async () => ({ reply: 'Current response' }) }));
    await page.waitForFunction(() => document.body.textContent.includes('Current response') && !document.querySelector('#bs-chat-input').disabled);
    console.log('PASS: reset cancels stale replies without interrupting the new request');

    await page.evaluate(() => { window.mode = 'network-error'; });
    await page.type('#bs-chat-input', 'Retry');
    await page.click('.bs-chat-send');
    await page.waitForFunction(() => document.querySelector('.bs-chat-error')?.textContent.includes('Unable to connect'));
    assert.deepEqual(errors, []);
    console.log('PASS: connection failures display an error without uncaught browser exceptions');

    const nativePage = await browser.newPage();
    const nativeErrors = [];
    nativePage.on('pageerror', error => nativeErrors.push(error.message));
    await nativePage.goto(frontendOrigin);
    await nativePage.click('.bs-chat-toggle');
    await nativePage.type('#bs-chat-input', 'Hello from Hostinger frontend');
    await nativePage.click('.bs-chat-send');
    await nativePage.waitForFunction(() => document.body.textContent.includes('Local CORS integration works'));
    assert.deepEqual(nativeErrors, []);
    console.log('PASS: real browser fetch, runtime configuration, CORS preflight and Node backend work together');
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => { backend.closeAllConnections(); backend.close(resolve); });
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
