import { ApiPath, HttpMethod, LogLevel } from '../../common/enums/enums.js';
import { logger } from '../../decorators/decorators.js';
import { fastify } from '../../fastify.js';

class User {
  @logger(LogLevel.LOG)
  @fastify.handler({
    method: HttpMethod.GET,
    path: ApiPath.USERS,
  })
  handleUsersGet(_req, res) {
    return res.send([]);
  }

  @logger(LogLevel.WARNING)
  @fastify.handler({
    method: HttpMethod.POST,
    path: ApiPath.USERS,
  })
  handleUserCreate(req, res) {
    return res.send(req.body);
  }
}

export { User };
