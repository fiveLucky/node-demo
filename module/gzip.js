// gzip

const zlib = require("zlib");
const fs = require("fs");

function gzip(filePath, res) {
  const zip = zlib.createGzip();
  const stream = fs.createReadStream(filePath);

  return new Promise((resolve, reject) => {
    try {
      const s = stream.pipe(zip).pipe(res);
      s.on("end", () => {
        resolve(s);
      });
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = gzip;
