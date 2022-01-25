import express from "express";
import cors from "cors";
import helmet from "helmet";

class Middlewares {
  constructor(public app: express.Application) {
    this.middlewares();
  }

  middlewares(): void {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
  }
}

export default Middlewares;
