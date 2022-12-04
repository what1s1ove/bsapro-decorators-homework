import { ApiPath } from "../../common/api-path.js";
import { HttpMethod } from "../../common/http-method.js";
import { LogLevel } from "../../common/log-level.js";
import { logger } from "../../decorators/decorators.js";
import { fastifyServer } from "../../server.js";

class UsersApi {
  @logger(LogLevel.LOG)
  @fastifyServer.routeHandler({
    method: HttpMethod.GET,
    path: ApiPath.USERS,
  })
  handleUsersGet(_req, res) {
    return res.send([]);
  }

  @logger(LogLevel.WARNING)
  @fastifyServer.routeHandler({
    method: HttpMethod.POST,
    path: ApiPath.USERS,
  })
  handleUserCreate(req, res) {
    return res.send(req.body);
  }
}

export { UsersApi };
