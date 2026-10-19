const fs = require('node:fs');
const path = require('node:path');
const dotenv = require('dotenv');
const { createApp } = require('./app.cjs');

const backendEnv = path.join(__dirname, '.env');
dotenv.config({ path: fs.existsSync(backendEnv) ? backendEnv : path.join(__dirname, '..', '.env'), quiet: true });
const port = Number(process.env.PORT || 8081);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error('PORT must be an integer between 1 and 65535.');
  process.exit(1);
}
const app = createApp();
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Bytechsol chat API listening on port ${port}`);
});
process.on('SIGTERM', () => server.close(() => process.exit(0)));
