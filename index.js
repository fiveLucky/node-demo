const { start } = require("./server");
const Router = require("./router");
const fs = require("fs");

const router = new Router();

router.get("/", (ctx) => {
  const { res } = ctx;
  // res.writeHead(200, "Content-type", "text/plain");
  const html = fs.readFileSync(__dirname + "/index.html", "utf-8");
  res.write(html);
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
router.post("/getJsonData", (ctx) => {
  const { res, req } = ctx;
  if (req.body.name) {
    res.write(
      JSON.stringify({
        name: "node-demo",
        size: 50,
        time: Date.now(),
      })
    );
  } else {
    res.write("缺少参数");
  }
  // res.writeHead(200, "Content-type", "application/json");
  res.end();
});

start(router.getRoutes());
