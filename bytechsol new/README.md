# Bytechsol

The React/Vite frontend is hosted on Hostinger. The chatbot runs as a separate Node/Express service on Render and calls Groq server-side. PHP is no longer used by the chatbot.

## Deploy the chat backend on Render

Create a **Web Service** connected to this GitHub repository with these settings:

| Setting | Value |
| --- | --- |
| Branch | main |
| Root Directory | bytechsol new/chat-backend |
| Runtime | Node |
| Build Command | npm ci --omit=dev |
| Start Command | npm start |
| Health Check Path | /health |
| Node version | 22 |

The repository contains a Render Blueprint at **bytechsol new/render.yaml**. If using New > Blueprint, use that Blueprint Path. The Blueprint selects a free service; the service can take time to wake after inactivity.

Set these environment variables on the Render service:

- GROQ_API_KEY: a newly generated Groq key. Never put it in the frontend or commit it.
- GROQ_MODEL: openai/gpt-oss-120b
- ALLOWED_ORIGINS: https://bytechsolllc.com,https://www.bytechsolllc.com
- NODE_ENV: production

Render sets PORT; the backend binds to 0.0.0.0 and uses that value automatically. For local use, it defaults to port 8081.

After deployment:

1. Open the service URL followed by **/health**. It should return status ok and configured true. This confirms the process and key configuration, not that Groq accepts the key.
2. Open **/ready**; it should return HTTP 200 with status ready.
3. Test POST **/api/chat** with JSON: {"messages":[{"role":"user","content":"Hello"}]}. A successful response contains a nonempty reply string. Provider errors return a safe code such as PROVIDER_AUTH_ERROR or PROVIDER_RATE_LIMIT, without exposing credentials.

## Connect Hostinger to Render

Edit **public/chat-config.json** and set its public endpoint URL:

```json
{
  "apiUrl": "https://YOUR_ACTUAL_RENDER_SERVICE.onrender.com/api/chat"
}
```

Use the actual URL shown by Render. The URL does not include a port number. The config contains no secret.

Run **npm run build** yourself and upload the contents of dist to the domain's public_html. The build includes chat-config.json and the existing full .htaccess. Preserve the cms WordPress folder and any hosting-specific configuration. Clear website/CDN cache after uploading updated assets.

You can also change **public_html/chat-config.json** directly in Hostinger File Manager if the frontend has already been built with this integration. Changing that public URL does not require another build. Keep the source copy in public/chat-config.json aligned for future builds.

An empty URL is intentional until Render assigns the service URL. On localhost it uses /api/chat through the Vite proxy. On the live website it shows a controlled unavailable message until a valid HTTPS backend URL is configured; it never falls back to PHP.

Once the new integration is verified live, remove the obsolete Hostinger files **public_html/api/chat.php**, **public_html/api/hostinger-chat-refresh.php**, and the old **bytechsol-chat-config.php** / **bytechsol-chat-rate-limit.json** outside public_html. Those files are not part of new builds. Existing dist files are not changed by source updates; only a build you run regenerates dist.

## Local development

1. Install frontend dependencies: npm install
2. Install backend dependencies: npm --prefix chat-backend ci
3. Copy chat-backend/.env.example to chat-backend/.env and enter a new Groq key.
4. Start the backend: npm run chat
5. In another terminal start Vite: npm run dev

The backend uses chat-backend/.env if present, otherwise the existing project .env for local compatibility. Render uses dashboard environment variables. CORS is restricted to ALLOWED_ORIGINS; include your local Vite origin when overriding that setting for development.

The existing SSR/CMS server remains available through npm run serve:ssr. It uses the same chat router at /api/chat; its CMS and blog routes are unchanged.

## Validation

- npm run test:chat ? real local HTTP tests with mocked Groq responses; no real keys or billable calls.
- npm run test:chat:frontend ? endpoint-config checks and headless browser regression tests. Uses the project's existing TypeScript and Puppeteer dependencies.

The chat API limits message size and history and allows 20 requests per client IP per 10 minutes. Limits are held in memory per backend instance and reset on restart. Groq calls time out after 25 seconds. The browser waits up to 90 seconds to accommodate a Render service waking up.

Reference: [Render web services](https://render.com/docs/web-services), [Render Blueprints](https://render.com/docs/blueprint-spec), [Groq Chat API](https://console.groq.com/docs/api-reference).
