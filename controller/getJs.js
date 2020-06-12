const path = require("path");
const gzip = require("../module/gzip");

module.exports = {
  async get(ctx) {
    const { res, req } = ctx;

    if (req.headers["accept-encoding"].includes("gzip")) {
      // 告诉浏览器编码方式
      res.writeHead(200, { "Content-Encoding": "gzip" });
      // 开启 gzip 对比下面直接返回资源，确实压缩了一些体积
      await gzip(path.resolve(__dirname + "/home.js"), res);
      // res.write(require("fs").readFileSync(path.resolve(__dirname + "/home.js")));
    } else {
      res.write("unsupported gzip");
    }
    res.end();
  },
  path: "/getJs",
};
