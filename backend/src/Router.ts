import { Application } from "express";

class Router {
  constructor(public app: Application) {
    this.routes();
  }

  routes(): void {}
}

export default Router;
