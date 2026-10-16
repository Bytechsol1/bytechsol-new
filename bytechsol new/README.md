# React + TypeScript + Vite

## AI chatbot setup

The website chatbot calls `/api/chat.php`. Hostinger runs the PHP endpoint; the local Express server handles the same route during development. API keys stay on the server.

### Hostinger File Manager deployment (no VPS or Node server)

1. Use PHP 8.3 or later with the cURL extension enabled in hPanel.
2. Run `npm install` and `npm run build` locally. Upload the **contents** of `dist` into your domain's `public_html`, including `api/chat.php` and `.htaccess`. Keep the existing `cms` WordPress folder. If your hosting already has custom `.htaccess` rules, merge the React fallback rules instead of overwriting those custom rules. The `!-f` condition must remain so PHP files run instead of returning `index.html`.
3. In File Manager, go **one level above** that domain's `public_html`. Copy the contents of `deploy/bytechsol-chat-config.example.php` into a new file named `bytechsol-chat-config.php`, and replace its placeholder with your Groq API key. This private file is uploaded separately; it must never go inside `public_html` or `dist`.

   ```text
   your-domain-folder/
     bytechsol-chat-config.php      (private key; create once)
     public_html/
       index.html
       .htaccess
       assets/
       api/
         chat.php
       cms/                        (keep existing WordPress files)
   ```

4. PHP creates `bytechsol-chat-rate-limit.json` beside the private config file. PHP needs write access to that parent directory. The limit is 20 requests per client IP per 10 minutes; the client IP comes from the server's `REMOTE_ADDR` value.
5. Open `https://bytechsol.com/api/chat.php` directly. JSON saying `Use POST to send a chat message.` is expected, with HTTP 405. It proves the PHP endpoint is executing; it does not verify the key. Then send a message through the website chatbot to test Groq.
6. Clear the website/CDN cache and hard refresh after uploading the new assets. Future builds include the PHP endpoint automatically; the private key file stays outside `public_html`.

If `/api/chat.php` returns the homepage, check the upload path and existing rewrite rules. HTTP 503 saying `Chat is not configured yet.` means the private configuration is missing or invalid. A 502/504 may indicate the provider rejected the key/model, a provider limit, a timeout, or an outbound connection problem; inspect PHP error logs for the provider HTTP status/cURL error code. Never disable TLS verification to work around connection errors. A local `.env` file does not configure this PHP deployment.

### Local Express development

1. Copy `.env.example` to `.env`.
2. Create a new Groq API key and set it as `GROQ_API_KEY` in `.env`.
   The default model is `openai/gpt-oss-120b`; change `GROQ_MODEL` only if your Groq account supports a different production model.
3. Run `npm run build`.
4. Run `npm run serve:ssr` for the production server, or `npm run cms` for the Vite development proxy plus API server.

Never commit `.env` or place the API key in a `VITE_` environment variable. If a key is pasted into chat, logs, or source code, revoke it and create another one.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
