// server/index.cjs
require('ignore-styles');
const path = require('path'); // Import path

// Handle images
const imageExtensions = ['.webp', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico'];
imageExtensions.forEach((ext) => {
  require.extensions[ext] = (module, filename) => {
    // FIX: Return web path
    const baseName = path.basename(filename);
    module.exports = `/assets/${baseName}`;
  };
});

// ... rest of your babel config and require('./server.jsx')
require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript'
  ],
  extensions: ['.js', '.jsx', '.ts', '.tsx']
});

require('./server.jsx');