require("dotenv").config({ path: ".env.local" });
const { parse } = require("url");
const next = require("next");
const app = require("./server/index");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = parseInt(process.env.PORT || "3000", 10);

const nextApp = next({ dev, hostname, port });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  app.all(/.*/, (req, res) => {
    const parsedUrl = parse(req.url, true);

    // If request starts with /api, it's already handled by Express routes
    if (req.url.startsWith("/api")) {
      return;
    }

    // Let Next.js handle all other routes
    return handle(req, res, parsedUrl);
  });

  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
    console.log(`> API endpoints at http://${hostname}:${port}/api`);
  });
});
