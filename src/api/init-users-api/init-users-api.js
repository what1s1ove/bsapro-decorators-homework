import { ApiPath } from "../../common/api-path.js";
import { HttpMethod } from "../../common/http-method.js";
import { LogLevel } from "../../common/log-level.js";
import { initLogger } from "../../decorators/decorators.js";
import { fastifyServer } from "../../server.js";

class UsersApi {
  @initLogger(LogLevel.LOG)
  @fastifyServer.routeHandler({
    method: HttpMethod.GET,
    path: ApiPath.USERS,
  })
  handleUsersGet(_req, res) {
    return res.send([]);
  }

  @initLogger(LogLevel.WARNING)
  @fastifyServer.routeHandler({
    method: HttpMethod.POST,
    path: ApiPath.USERS,
  })
  handleUserCreate(req, res) {
    return res.send(req.body);
  }
}

export { UsersApi };
