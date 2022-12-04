import { ApiPath, HttpMethod, LogLevel } from "../common/enums/enums.js";
import { logger } from "../common/decorators/decorators.js";
import { server } from "../server.js";

class UsersApi {
  @server.handler({
    method: HttpMethod.GET,
    path: ApiPath.USERS,
  })
  @logger(LogLevel.LOG)
  getUsers(_req, res) {
    return res.send([]);
  }

  @server.handler({
    method: HttpMethod.POST,
    path: ApiPath.USERS,
  })
  @logger(LogLevel.WARNING)
  createUser(req, res) {
    return res.send(req.body);
  }
}

export { UsersApi };
