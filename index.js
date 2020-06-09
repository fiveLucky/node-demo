const { start } = require("./server");
const Router = require("./router");

const router = new Router();

router.get("/", (ctx) => {
  const { res } = ctx;
  // res.writeHead(200, "Content-type", "text/plain");
  res.write("HOME");
  res.end();
});

router.get("/getData", (ctx) => {
  const { res } = ctx;
  // res.writeHead(200, "Content-type", "application/json");
  res.write(
    JSON.stringify({
      name: "node-demo",
      size: 50,
      time: Date.now(),
    })
  );
  res.end();
});

start(router.getRoutes());
