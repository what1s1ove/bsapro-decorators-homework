import { ApiPath, HttpMethod, LogLevel } from '../../common/enums/enums.js';

const initUserApi = ({ server, logger }) => new class User {
  @server.route({
    method: HttpMethod.GET,
    path: ApiPath.USERS,
  })
  @logger.log(LogLevel.INFO)
  handleUsersGet(_req, res) {
    return res.send([]);
  }

  @server.route({
    method: HttpMethod.POST,
    path: ApiPath.USERS,
  })
  @logger.log(LogLevel.INFO)
  handleUserCreate(req, res) {
    return res.send(req.body);
  }
}

export { initUserApi };
