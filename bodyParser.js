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
          // 得到的数据类型取决于传过来的body数据是什么
          // 如果传入的body是字符串，这里得到的就是字符串
          // 如果传入的body是对象或者数组，这里得到的就是buffer 需要使用arr.push(data), Buffer.concat(arr).toString("utf8") 得到 json 字符串，然后 JSON.parse()
          // 这里只处理字符串类型，客户端body使用JSON.stringify()处理
          postParam += data;
        });
        req.on("end", () => {
          // json 字符串
          req.body = JSON.parse(postParam) || {};
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
