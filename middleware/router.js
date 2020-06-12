/**
 * @tittle  router
 * @description 路由的作用就是通过匹配，然后执行对应的逻辑
 */

const url = require("url");

class Router {
  constructor() {
    // 先支持单一控制器
    this.routes = {};
  }
  get(pathname, handler) {
    this.routes[pathname] = handler;
  }
  post(pathname, handler) {
    this.routes[pathname] = handler;
  }
  getRoutes() {
    const dispatch = (ctx) => {
      const { req } = ctx;
      const pathname = url.parse(req.url).pathname;
      this.routes[pathname] && this.routes[pathname](ctx);
    };
    return dispatch;
  }
}

module.exports = Router;
