import express from "express";

import Middlewares from "./Middlewares";
import Router from "./Router";

class App {
  app = express();
  middlewares = new Middlewares(this.app);
  routes = new Router(this.app);
}

export default new App().app;
