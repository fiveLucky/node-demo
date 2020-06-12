module.exports = {
  get(ctx) {
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
  },
  path: "/getData",
};
