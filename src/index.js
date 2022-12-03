import { ApiPath, AppConfig, LogLevel, HttpMethod } from "./common/common.js";
import {
  initLogger,
  initHandler,
  initDebounce,
} from "./decorators/decorators.js";

import fastify from "fastify";

const app = fastify();

class Application {
  @initHandler(
    {
      method: HttpMethod.GET,
      path: ApiPath.USERS,
    },
    app
  )
  @initLogger(LogLevel.LOG)
  handleUsersGet(_req, res) {
    return res.send([]);
  }

  @initHandler(
    {
      method: HttpMethod.POST,
      path: ApiPath.USERS,
    },
    app
  )
  @initLogger(LogLevel.WARNING)
  handleUserCreate(req, res) {
    return res.send(req.body);
  }

  @initDebounce(5000)
  initDbConnection() {
    console.log("DB connection was success!");
  }

  async init() {
    await app.listen({ port: AppConfig.PORT });

    this.initDbConnection();
  }
}

new Application().init().catch(console.error);
