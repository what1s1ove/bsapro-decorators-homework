import {logger} from "../../decorators/logger/logger.decorator.js";
import {ApiPath, HttpMethod, LogLevel} from "../../common/enums/enums.js";
import {server} from "../../server.js"

class UsersApi {
  @logger(LogLevel.LOG)
  @server.handleRoute({
    method: HttpMethod.GET,
    url: ApiPath.USERS
  })
  handleUsersGet(_req, res) {
    return res.send([]);
  }

  @logger(LogLevel.WARNING)
  @server.handleRoute({
    method: HttpMethod.POST,
    url: ApiPath.USERS
  })
  handleUserCreate(req, res) {
    return res.send(req.body);
  }
}

export {
  UsersApi
}
