const { start } = require("./middleware/server");
const Router = require("./middleware/router");
const { loadControllers } = require("./middleware/loadModule");

const router = new Router();

// 加载 controller
loadControllers(router);
// 启动服务，加载路由
start(router.getRoutes());
