import {AppConfig} from "./common/enums/enums.js"
import {debounce} from "./decorators/decorators.js"
import {server} from "./server.js"
import {initialiseApi} from "./api/api.js";
import {dbService} from "./services/services.js"

class Application {

  @debounce(5000)
  initDbConnection() {
    dbService.initDbConnection();
  }

  async init() {
    initialiseApi();
    await server.listen(AppConfig.PORT);

    this.initDbConnection();
  }
}

new Application().init().catch(console.error);
