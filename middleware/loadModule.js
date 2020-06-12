const fs = require("fs");
const path = require("path");

const { getMethod } = require("../util");

function loadControllers(router) {
  const controllerPath = path.resolve("./controller");
  const controllers = fs.readdirSync(controllerPath);
  controllers.forEach((file) => {
    const module = require(`${controllerPath}/${file}`);
    const method = getMethod(module);

    router[method](module.path, module[method]);
  });
}

module.exports = {
  loadControllers,
};
