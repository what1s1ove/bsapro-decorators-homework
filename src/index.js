import { AppConfig } from "./common/common.js";
import { debounce } from "./decorators/decorators.js";

import { server } from "./server.js";
import { UsersApi } from "./api/api.js";

class Application {
  @debounce(5000)
  initDbConnection() {
    console.log("DB connection was success!");
  }

  initApi() {
    new UsersApi();
  }

  async init() {
    this.initApi();

    await server.listen({ port: AppConfig.PORT });

    this.initDbConnection();
  }
}

new Application().init().catch(console.error);
