const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

const hostname = "https://bytechsol.com";

const routes = [
  "/",
  "/about/",
  "/services/",
  "/services/ai-ml/",
  "/services/e-commerce-solutions/",
  "/services/erp-service/",
  "/services/brand-building/",
  "/services/custom-web/",
  "/services/new",
  "/services/odoo-services/",
  "/services/seo-service/",
  "/services/web-app/",
  "/services/website-design-and-development/",
  "/blog/",
  "/careers/",
  "/contact/",
];

const publicDir = path.resolve(process.cwd(), "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");

console.log("📁 Writing sitemap to:", sitemapPath);

const sitemapStream = new SitemapStream({ hostname });
const writeStream = createWriteStream(sitemapPath);

routes.forEach((url) => {
  sitemapStream.write({ url, changefreq: "weekly", priority: 0.8 });
});

sitemapStream.end();

streamToPromise(sitemapStream)
  .then((data) => {
    writeStream.write(data.toString());
    writeStream.end();
    console.log("✅ Sitemap generated successfully!");
  })
  .catch((err) => console.error("❌ Error generating sitemap:", err));
