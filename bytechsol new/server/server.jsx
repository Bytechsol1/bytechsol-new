// server/server.jsx
import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../src/App.tsx';

const PORT = 8000;
const app = express();
const router = express.Router();

// 1. Resolve path to dist folder
const distPath = path.resolve(__dirname, '../dist'); 
const indexFile = path.join(distPath, 'index.html');

// 2. CRITICAL FIX: Add { index: false }
// This prevents Express from automatically serving index.html,
// allowing the request to pass through to the SSR route below.
router.use(express.static(distPath, { index: false, maxAge: '30d' }));

// 3. USE REGEX MATCHER (Reverted to this as it works in your environment)
router.get(/(.*)/, (req, res) => {
  // Check if index.html exists
  if (!fs.existsSync(indexFile)) {
    console.error('❌ Missing dist/index.html');
    return res.status(500).send("Build missing. Please run 'npm run build' first.");
  }

  fs.readFile(indexFile, 'utf-8', (err, data) => {
    if (err) {
      console.error('❌ Error reading index.html:', err);
      return res.status(500).send("Server Error");
    }

    try {
      // 4. Robust App Import
      const AppComponent = App.default || App;

      console.log(`⚡ Rendering content for: ${req.url}`);

      const appHtml = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
          <AppComponent />
        </StaticRouter>
      );

      // 5. Inject HTML
      const finalHtml = data.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      return res.send(finalHtml);

    } catch (renderErr) {
      console.error('❌ SSR Rendering Error:', renderErr);
      // Fallback to client-side rendering on error
      return res.send(data);
    }
  });
});

app.use(router);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});