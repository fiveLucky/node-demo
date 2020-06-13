// dns 解析

const dns = require("dns");

module.exports = function (domain) {
  return new Promise((res, rej) => {
    // ipv4 域名解析  不会受到本地host影响
    dns.resolve4(domain, (err, address) => {
      if (err) {
        rej(err);
      } else {
        res(address);
      }
    });
    // dns.resolve6  解析ipv6
  });
};
