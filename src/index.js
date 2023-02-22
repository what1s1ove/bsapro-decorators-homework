import {ApiPath, AppConfig, HttpMethod, LogLevel} from './common/enums/enums.js'
import {debounce, logger} from './decorators/decorators.js'
import {server} from './server.js'


class Application {

  @logger(LogLevel.LOG)
  handleUsersGet(_req, res) {
    return res.send([]);
  }

  @logger(LogLevel.WARNING)
  handleUserCreate(req, res) {
    return res.send(req.body);
  }

  @debounce(5000)
  initDbConnection() {
    console.log("DB connection was success!");
  }

  async init() {
    await server.listen(AppConfig.PORT);

    this.initDbConnection();
  }
}

new Application().init().catch(console.error);
