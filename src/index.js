import { AppConfig, DebounceTimeout } from "./common/enums/enums.js";
import { debounce } from "./common/decorators/decorators.js";
import { server } from "./server.js";
import { UsersApi } from "./api/api.js";

class Application {
  constructor() {
    new UsersApi();
  }

  @debounce(DebounceTimeout.TWO_SECONDS)
  #initDbConnection() {
    console.log("DB connected successfully.");
  }

  async start() {
    await server.listen({ port: AppConfig.PORT });

    this.#initDbConnection();
  }
}

new Application().start().catch(console.error);
