// function parseQueryToJson(query){
//   const arr = query.split("&");
// }
function getMethod(module) {
  return ["get", "post"].find((method) => !!module[method]);
}

module.exports = {
  getMethod,
};
