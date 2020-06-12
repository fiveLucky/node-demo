const path = require("path");
const gzip = require("../module/gzip");

module.exports = {
  async get(ctx) {
    const { res, req } = ctx;

    if (req.headers["accept-encoding"].includes("gzip")) {
      res.writeHead(200, { "Content-Encoding": "gzip" });
      // 对图片资源开启 gzip 基本无效，可能还会适得其反
      await gzip(path.resolve("./asset/img/duck.JPG"), res);
    } else {
      res.write("unsupported gzip");
    }
    res.end();
  },
  path: "/getImg",
};
