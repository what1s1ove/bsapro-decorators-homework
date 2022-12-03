import fastify from "fastify";

class FastifyServer {
  #app;

  constructor() {
    this.#app = fastify();
  }

  routeHandler(options) {
    return (func) => {
      const { method, path } = options;

      this.#app.route({
        method,
        url: path,
        handler: func,
      });

      return func;
    };
  }

  listen(port) {
    return this.#app.listen(port);
  }
}

const fastifyServer = new FastifyServer();

export { fastifyServer };
