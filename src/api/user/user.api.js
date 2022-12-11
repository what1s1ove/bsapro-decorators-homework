import { ApiPath, HttpMethod, LogLevel } from '../../common/enums/enums.js';
import { logger } from '../../decorators/decorators.js';

const initUserApi = server => new class User {
  @server.route({
    method: HttpMethod.GET,
    path: ApiPath.USERS,
  })
  @logger(LogLevel.LOG)
  handleUsersGet(_req, res) {
    return res.send([]);
  }

  @server.route({
    method: HttpMethod.POST,
    path: ApiPath.USERS,
  })
  @logger(LogLevel.WARNING)
  handleUserCreate(req, res) {
    return res.send(req.body);
  }
}

export { initUserApi };
