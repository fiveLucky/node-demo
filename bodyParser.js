/**
 * @title bodyParser
 * @description 解析 post 请求参数，放到 req.body 中，简单实现 koa-bodyparser 功能
 */

function bodyParser(req, res) {
  return new Promise((resolve, rej) => {
    try {
      if (req.method === "POST") {
        res.setHeader("Content-type", "application/json");
        let postParam = "";
        req.on("data", (data) => {
          // 得到的数据是 buffer 类型
          postParam += data;
        });
        req.on("end", () => {
          // json 字符串
          const str = postParam.toString("utf8");
          req.body = JSON.parse(str);
          resolve();
        });
      } else {
        resolve();
      }
    } catch (e) {
      rej(e);
    }
  });
}

module.exports = {
  bodyParser,
};
