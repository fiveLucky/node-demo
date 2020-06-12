module.exports = {
  post(ctx) {
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
    res.end();
  },
  path: "/getJsonData",
};
