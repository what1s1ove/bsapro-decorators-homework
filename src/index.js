import fastify from 'fastify';
import { debounce, handler, logger } from './decorators/decorators.js';
import { ApiPath, ENV, HttpMethod, LogLevel } from './common/enums/enums.js';

class Application {
  #app = fastify();

  get app() {
    return this.#app;
  }

  @logger(LogLevel.LOG)
  @handler({
    method: HttpMethod.GET,
    path: ApiPath.USERS,
  })
  handleUsersGet(_req, res) {
    return res.send([]);
  }

  @logger(LogLevel.WARNING)
  @handler({
    method: HttpMethod.POST,
    path: ApiPath.USERS,
  })
  handleUserCreate(req, res) {
    return res.send(req.body);
  }

  @debounce(5000)
  initDbConnection() {
    console.log('DB connection was success!');
  }

  async init() {
    await this.app.listen({ port: ENV.PORT });

    this.initDbConnection();
  }
}

new Application().init().catch(console.error);
