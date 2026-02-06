// server/entry.cjs
const path = require('path'); // Import path module

// 1. Mock Image & CSS imports
// FIX: Return a web path ('/assets/filename') instead of a hard drive path
const extensions = ['.css', '.scss', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webp', '.mp4'];
extensions.forEach((ext) => {
  require.extensions[ext] = (module, filename) => {
    // Instead of returning the full absolute path (which breaks the browser),
    // we return a relative path.
    // NOTE: This might not match Vite's hashed filenames perfectly (causing a split-second flicker),
    // but it fixes the crash and the "Not allowed" errors.
    const baseName = path.basename(filename);
    module.exports = `/assets/${baseName}`;
  };
});

// 2. Configure Babel to Compile Code
require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript'
  ],
  extensions: ['.js', '.jsx', '.ts', '.tsx']
});

// 3. Run the Server
console.log('Starting server...');
try {
  require('./server.jsx');
} catch (e) {
  console.error('Failed to start server:', e);
}

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});