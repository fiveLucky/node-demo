const dns = require("../module/dns");

module.exports = {
  async post(ctx) {
    const { res, req } = ctx;
    const address = await dns("www.baidu.com");
    if (req.body.name) {
      res.write(JSON.stringify(address));
    } else {
      res.write("缺少参数");
    }
    res.end();
  },
  path: "/getJsonData",
};
