const fs = require("fs");
const path = require("path");

module.exports = {
  get(ctx) {
    const { res } = ctx;
    // res.writeHead(200, "Content-type", "text/plain");
    const html = fs.readFileSync(path.resolve("./index.html"), "utf-8");
    res.write(html);
    res.end();
  },
  path: "/",
};
