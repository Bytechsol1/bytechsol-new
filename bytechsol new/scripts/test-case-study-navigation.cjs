const assert = require("node:assert/strict");
const puppeteer = require("puppeteer");
const origin = process.argv[2] || "http://127.0.0.1:5173";
const industries = [
  "sales-teams",
  "sdr-bdr-teams",
  "small-business",
  "enterprise",
  "real-estate",
  "insurance",
  "saas",
  "collections",
  "gohighlevel-agencies",
];
const external = [
  ["loop", "Loop", "https://loop.bytechsol.com/login"],
  ["skynode", "Skynode", "https://sky-node-edge-solution-new-design.vercel.app/"],
  ["babylon-os", "Babylon OS", "https://babylon-os.vercel.app/login"],
  ["expedited-transport", "Expedited Transport", "https://expeditedtransport.net/"],
  ["clockit", "ClockIt", "https://clockit.expeditedtransportservices.net/"],
  ["frigo-labs", "Frigo Labs", "https://frigolabs.vercel.app/login"],
  [
    "cmjl-mobile-app",
    "CMJL Mobile App",
    "https://play.google.com/store/apps/details?id=net.expeditedtransport.driverapp",
  ],
  [
    "labour-tracker-app",
    "Labour Tracker App",
    "https://labour-tracker-app-alpha.vercel.app/worker-portal",
  ],
];

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
    await page.setViewport({ width: 1440, height: 1000 });
    const redirects = [];
    await page.setRequestInterception(true);
    page.on("request", (request) => {
      if (
        request.isNavigationRequest() &&
        request.frame() === page.mainFrame() &&
        new URL(request.url()).origin !== new URL(origin).origin
      ) {
        redirects.push(request.url());
        return request.respond({
          status: 200,
          contentType: "text/html",
          body: "<!doctype html><title>External destination captured</title>",
        });
      }
      return request.continue();
    });
    await page.goto(origin + "/portfolio/", { waitUntil: "networkidle2" });
    assert.equal(await page.$$eval("main a.group", (cards) => cards.length), 9);
    for (const [, name, website] of external) {
      const actual = await page.$$eval(
        "main a.group",
        (cards, name) => {
          const card = cards.find((card) => card.querySelector("h3")?.textContent.trim() === name);
          return card && { href: card.getAttribute("href"), target: card.target, rel: card.rel };
        },
        name,
      );
      assert.equal(actual.href, website);
      assert.equal(actual.target, "_blank");
      assert.ok(actual.rel.includes("noopener"));
    }
    await page.click('main a[href="/case-studies"]');
    await page.waitForSelector(".vu-single");
    assert.equal(new URL(page.url()).pathname, "/case-studies");
    assert.equal(await page.$$eval("main h1", (elements) => elements.length), 1);
    assert.equal(await page.$$eval(".vu-case", (elements) => elements.length), 9);
    assert.equal(await page.$$eval(".vu-industry-nav", (elements) => elements.length), 0);
    assert.equal(
      await page.$$eval(".vu-comparison-table tbody tr", (elements) => elements.length),
      9,
    );
    assert.equal(
      await page.$eval('link[rel="canonical"]', (e) => e.href),
      "https://bytechsol.com/case-studies",
    );
    assert.ok(await page.$eval('meta[property="og:description"]', (e) => e.content));
    assert.equal(
      await page.$eval(
        'script[type="application/ld+json"]',
        (e) => JSON.parse(e.textContent)["@type"],
      ),
      "BreadcrumbList",
    );
    assert.equal(
      await page.$eval(".vu-hero .vx-action--secondary", (e) => e.href),
      "https://voxxiq.com/",
    );
    assert.equal(await page.$$eval(".vu-workspace", (elements) => elements.length), 0);
    assert.equal(
      await page.$eval(".vs-device-showcase", (e) => getComputedStyle(e).transform),
      "none",
    );
    assert.equal(
      await page.$eval(".vs-laptop--main img", (e) => e.getAttribute("width")),
      "1024",
    );
    console.log(
      "PASS project card, nine complete sections, comparison, SEO, live website CTA and reduced motion",
    );

    for (const slug of industries) {
      await page.$eval('.vu-comparison-table a[href="/case-studies#' + slug + '"]', (link) =>
        link.click(),
      );
      await page.waitForFunction(
        (slug) =>
          location.hash === "#" + slug &&
          Math.abs(document.getElementById(slug).getBoundingClientRect().top - 24) < 3,
        {},
        slug,
      );
      assert.equal(
        await page.$$eval(
          "#" +
            slug +
            " .vu-workflow-disclosure, #" +
            slug +
            " .vu-feature-disclosure, #" +
            slug +
            " .vd-industry-plan, #" +
            slug +
            " .vu-kpi-strip",
          (elements) => elements.length,
        ),
        0,
      );
      console.log("PASS industry anchor and removed supplementary blocks: " + slug);
    }

    await page.focus("#sales-teams .vr-story-challenge summary");
    await page.keyboard.press("Enter");
    assert.equal(
      await page.$eval("#sales-teams .vr-story-challenge", (element) => element.open),
      true,
    );

    for (const width of [320, 375, 390, 430, 768, 1024, 1280, 1440]) {
      await page.setViewport({ width, height: 900 });
      assert.ok(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1),
        "Page overflows at " + width,
      );
      const clipped = await page.$$eval(
        ".vr-story .vu-case-layout",
        (elements) =>
          elements.filter((e) => {
            const rect = e.getBoundingClientRect();
            return rect.left < -1 || rect.right > innerWidth + 1;
          }).length,
      );
      assert.equal(clipped, 0, "Content clipped at " + width);
    }
    await page.setViewport({ width: 390, height: 844 });
    await page.$eval('.vu-comparison-table a[href="/case-studies#real-estate"]', (link) =>
      link.click(),
    );
    await page.waitForFunction(() => location.hash === "#real-estate");
    await page.goBack();
    await page.waitForFunction(() => location.hash === "#gohighlevel-agencies");
    await page.goForward();
    await page.waitForFunction(() => location.hash === "#real-estate");
    await page.waitForFunction(
      () => Math.abs(document.getElementById("real-estate")?.getBoundingClientRect().top - 24) < 3,
    );
    await page.reload({ waitUntil: "domcontentloaded" });
    await page.waitForFunction(
      () => Math.abs(document.getElementById("real-estate")?.getBoundingClientRect().top - 24) < 3,
    );
    console.log("PASS keyboard operation, eight viewport widths, hash refresh and browser history");

    for (const slug of ["voxiq", "voxxiq", ...industries]) {
      await page.goto(origin + "/case-studies/" + slug, { waitUntil: "domcontentloaded" });
      await page.waitForFunction(() => location.pathname === "/case-studies");
      assert.equal(new URL(page.url()).hash, industries.includes(slug) ? "#" + slug : "");
    }
    console.log("PASS all previous case study URLs resolve to the single page");
    await page.goto(origin + "/case-studies", { waitUntil: "domcontentloaded" });
    await page.waitForSelector('.vu-breadcrumbs a[href="/portfolio/"]');
    await page.$eval('.vu-breadcrumbs a[href="/portfolio/"]', (e) => e.click());
    await page.waitForSelector('main a[href="/case-studies"]');
    for (const [slug, , website] of external) {
      await page
        .goto(origin + "/case-studies/" + slug, { waitUntil: "domcontentloaded" })
        .catch((error) => {
          if (!error.message.includes("ERR_ABORTED")) throw error;
        });
      await page.waitForFunction(
        (expected) => location.href === expected,
        {},
        new URL(website).href,
      );
      assert.ok(redirects.includes(new URL(website).href));
    }
    await page.goto(origin + "/case-studies/unknown-project", { waitUntil: "domcontentloaded" });
    await page.waitForSelector(".notfound-404");
    console.log("PASS Back to Portfolio, other eight project destinations and unknown-route 404");
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
