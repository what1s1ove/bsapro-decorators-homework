const app = require("fastify")();

const AppConfig = {
  PORT: 3000,
};

const ApiPath = {
  USERS: "/users",
};

const HttpMethod = {
  GET: "GET",
  POST: "POST",
};

const LogLevel = {
  LOG: "log",
  WARNING: "warning",
};

const logger = (logLevel) => {
  return (value) => {
    return (req, res) => {
      const { method, url } = req;

      console.log(`Log Level: ${logLevel} Method: ${method} URL: ${url}`);

      value.call(null, req, res);
    };
  }
}

const debounce = (delay) => {
  return (value) => {
    let lastTimeout = null;
    return (...args) => {
      clearInterval(lastTimeout);
      lastTimeout = setTimeout(() => value.call(null, ...args), delay);
    };
  }
};

const registerPathHandler = (options) => {
  return (value) => {
    const { method, path } = options;
    app.route({
      method,
      url: path,
      handler: value,
    });

    return value
  }
}

class Application {

  @registerPathHandler({
    method: HttpMethod.GET,
    path: ApiPath.USERS,
    app: this._app
  })
  @logger(LogLevel.LOG)
  handleUsersGet(_req, res) {
    return res.send([]);
  }

  @registerPathHandler({
    method: HttpMethod.POST,
    path: ApiPath.USERS,
  })
  @logger(LogLevel.WARNING)
  handleUserCreate(req, res) {
    return res.send(req.body);
  }

  @debounce(5000)
  initDbConnection() {
    console.log("DB connection was success!");
  }

  async init() {
    await app.listen({ port: AppConfig.PORT });

    this.initDbConnection();
  }
}

new Application().init().catch(console.error);
