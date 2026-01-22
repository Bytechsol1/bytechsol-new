import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Helmet } from 'react-helmet';
import App from '../src/App.tsx';

const PORT = 8000;
const app = express();
const router = express.Router();

// 1. Resolve path to dist folder
const distPath = path.resolve(__dirname, '../dist'); 
const indexFile = path.join(distPath, 'index.html');

// 2. Serve static assets with index: false
// This allows the SSR route below to handle the root HTML requests
router.use(express.static(distPath, { index: false, maxAge: '30d' }));

// 3. SSR Handler
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
      const AppComponent = App.default || App;
      console.log(`⚡ Rendering content for: ${req.url}`);

      // 4. Render App to String
      const appHtml = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
          <AppComponent />
        </StaticRouter>
      );

      // 5. Capture Helmet Data (Must happen AFTER renderToString)
      const helmet = Helmet.renderStatic();

      // 6. Inject App and Helmet Data into HTML
      const finalHtml = data
        // Inject the React App
        .replace(
          '<div id="root"></div>', 
          `<div id="root">${appHtml}</div>`
        )
        // Replace the default title with the specific page title
        .replace(
          /<title>.*<\/title>/, 
          helmet.title.toString()
        )
        // Inject canonical links, meta tags, and scripts into the head
        // We append them right before the closing </head> tag
        .replace(
          '</head>', 
          `${helmet.meta.toString()} ${helmet.link.toString()} ${helmet.script.toString()} </head>`
        );

      return res.send(finalHtml);

    } catch (renderErr) {
      console.error('❌ SSR Rendering Error:', renderErr);
      // Fallback: Send the raw index.html (CSR) if SSR fails
      return res.send(data);
    }
  });
});

app.use(router);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});