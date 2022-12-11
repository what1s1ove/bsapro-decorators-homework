import { initUserApi } from './api/api.js';
import { debounce, Server } from './decorators/decorators.js'
import { AppConfig } from './common/configs/configs.js';
import { DebounceTimeout } from './common/enums/enums.js';

class Application {
  @debounce(DebounceTimeout.FIVE_SECONDS)
  #initDbConnection() {
    console.log('DB connection was success!');
  }

  #initApiRoutes = (server) => {
    initUserApi(server);
  }

  init = async (server) => {
    this.#initApiRoutes(server);
    await server.listen({ port: AppConfig.PORT });

    this.#initDbConnection();
  }
}

new Application().init(new Server()).catch(console.error);
