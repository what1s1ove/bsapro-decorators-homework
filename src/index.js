import fastify from 'fastify';

const AppConfig = {
  PORT: 3000,
};

const ApiPath = {
  USERS: '/users',
};

const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
};

const LogLevel = {
  LOG: 'log',
  WARNING: 'warning',
};

const logger = (logLevel) => {
  return (value) => {
    return function (req, res) {
      const { method, url } = req;

      console.log(`Log Level: ${logLevel} Method: ${method} URL: ${url}`);

      value.call(this, req, res);
    };
  };
};

const debounce = (delay) => {
  return (value) => {
    let lastTimeout = null;

    return function (...args) {
      clearInterval(lastTimeout);

      lastTimeout = setTimeout(() => {
        value.call(this, ...args);
      }, delay);
    };
  };
};

const handler = (options) => {
  return (value, { addInitializer }) => {
    const { method, path } = options;

    addInitializer(function () {
      this.app.route({
        method,
        url: path,
        handler: value,
      });
    });
  };
};

class Application {
  #app = fastify();

  get app() {
    return this.#app;
  }

  @logger(LogLevel.LOG)
  @handler({
    method: HttpMethod.GET,
    path: ApiPath.USERS,
  })
  handleUsersGet(_req, res) {
    return res.send([]);
  }

  @logger(LogLevel.WARNING)
  @handler({
    method: HttpMethod.POST,
    path: ApiPath.USERS,
  })
  handleUserCreate(req, res) {
    return res.send(req.body);
  }

  @debounce(5000)
  initDbConnection() {
    console.log('DB connection was success!');
  }

  async init() {
    await this.app.listen({ port: AppConfig.PORT });

    this.initDbConnection();
    this.handleUserCreate({}, { send: () => {} });
  }
}

new Application().init().catch(console.error);
