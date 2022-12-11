import { initUserApi } from './api/api.js';
import { AppConfig } from './common/configs/configs.js';
import { DebounceTimeout } from './common/enums/enums.js';
import { debounce, Logger, Server } from './decorators/decorators.js'

class Application {
  #server;
  #logger;

  constructor({ server, logger }) {
    this.#server = server;
    this.#logger = logger;
  }

  @debounce(DebounceTimeout.FIVE_SECONDS)
  #initDbConnection() {
    console.log('DB connection was success!');
  }

  #initApiRoutes = () => {
    initUserApi({ server: this.#server, logger: this.#logger });
  }

  init = async () => {
    this.#initApiRoutes(this.#server);
    await this.#server.listen({ port: AppConfig.PORT });

    this.#initDbConnection();
  }
}

new Application({
  server: new Server(),
  logger: new Logger({ env: 'development', logsPath: './app-logs.txt' })
}).init().catch(console.error);
