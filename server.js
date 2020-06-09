const http = require("http");

function start(routesFn) {
  const server = http.createServer(requestHandler);

  function requestHandler(req, res) {
    const ctx = {
      req,
      res,
    };
    routesFn(ctx);
  }

  server.listen(5000);
  console.log("server started at port:" + 5000);
}

module.exports = {
  start,
};
