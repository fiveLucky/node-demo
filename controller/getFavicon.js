const path = require("path");

module.exports = {
  async get(ctx) {
    const { res } = ctx;
    res.write(require("fs").readFileSync(path.resolve("./asset/img/avator.png")));
    res.end();
  },
  path: "/favicon.ico",
};
