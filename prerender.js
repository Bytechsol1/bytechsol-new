import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, 'dist');

// 1. Base Static Routes (Pages you manually built)
let routes = [
  '/',
  '/about/',
  '/services/',
  '/services/ai-ml/',
  '/services/e-commerce-solutions/',
  '/services/erp-service/',
  '/services/brand-building/',
  '/services/custom-web/',
  '/services/odoo-services/',
  '/services/seo-service/',
  '/services/web-app/',
  '/services/website-design-and-development/',
  '/blog/',
  '/careers/',
  '/contact/'
];

// 2. Function to fetch all Blog Posts from your WP Sitemap
async function fetchBlogRoutes() {
  try {
    console.log('🌍 Fetching sitemap from WordPress...');
    // Fetch the post sitemap directly
    const { data } = await axios.get('https://bytechsol.com/cms/post-sitemap.xml');

    const parser = new XMLParser();
    const result = parser.parse(data);

    // The parser might return an array or single object, normalize it
    let urls = result.urlset.url;
    if (!Array.isArray(urls)) {
      urls = [urls];
    }

    // Convert CMS links to your React Frontend links
    // Example: https://bytechsol.com/cms/hello-world/ -> /blog/hello-world/
    const blogRoutes = urls.map(u => {
      let loc = u.loc;
      // Adjust this replacement based on exactly how your WP URLs look vs your React URLs
      // Assuming WP is at /cms/ and React needs /blog/
      return loc.replace('https://bytechsol.com/cms/', '/blog/')
        .replace('https://bytechsol.com/', '/');
    });

    console.log(`📝 Found ${blogRoutes.length} blog posts to pre-render.`);
    return blogRoutes;
  } catch (err) {
    console.error('❌ Could not fetch sitemap:', err.message);
    return [];
  }
}

async function prerender() {
  // Combine static routes with dynamic blog routes
  const blogRoutes = await fetchBlogRoutes();
  const allRoutes = [...routes, ...blogRoutes];

  console.log('📦 Starting Pre-rendering...');

  // Launch Puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const route of allRoutes) {
    try {
      // Create the folder structure: dist/blog/my-slug/
      // Remove trailing slash for folder creation
      const cleanRoute = route.replace(/\/$/, "");
      const folderPath = route === '/' ? distPath : path.join(distPath, cleanRoute);

      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }

      // Visit your LOCAL server
      // Note: Ensure your server is running on localhost:8081 before running this script
      const url = `http://localhost:8081${route}`;
      console.log(`Rendering: ${url}`);

      await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

      // *** CRITICAL WAIT ***
      // We must wait for your "Loading..." state to finish and the real title to appear.
      // We wait for the <h1 class="blog-detail-title"> to exist in the DOM.
      if (route.includes('/blog/')) {
        try {
          await page.waitForSelector('.blog-detail-title', { timeout: 10000 });
        } catch (e) {
          console.log(`⚠️ Warning: Could not find title for ${route}, saving anyway.`);
        }
      }

      // Capture the HTML (which now includes the Helmet-injected Title!)
      let html = await page.content();

      // Fix Asset Paths
      html = html.replace(/src="assets\//g, 'src="/assets/')
        .replace(/href="assets\//g, 'href="/assets/');

      // Save the index.html file
      fs.writeFileSync(path.join(folderPath, 'index.html'), html);
      console.log(`✅ Generated: ${route}`);

    } catch (err) {
      console.error(`❌ Failed: ${route}`, err.message);
    }
  }

  await browser.close();
  console.log('🎉 Pre-rendering complete!');
}

prerender();