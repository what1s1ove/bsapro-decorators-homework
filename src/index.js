import { debounce } from './decorators/decorators.js';
import { ENV } from './common/enums/enums.js';
import { fastify } from './fastify.js';
import { initApi } from './api/api.js';
import { initDbConnection } from './db.js';

class Application {
  @debounce(5000)
  initDbConnection() {
    initDbConnection();
  }

  async init() {
    initApi();

    await fastify.listen({ port: ENV.PORT });

    this.initDbConnection();
  }
}

new Application().init().catch(console.error);
