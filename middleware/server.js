const http = require("http");

const { bodyParser } = require("./bodyParser.js");
function start(routes) {
  const server = http.createServer(async (req, res) => {
    await bodyParser(req, res);
    const ctx = {
      req,
      res,
    };
    routes(ctx);
  });

  server.listen(5000);
  console.log("server started at port:" + 5000);
}

module.exports = {
  start,
};
