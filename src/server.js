import fastify from "fastify";

class Server {
  #app;

  constructor() {
    this.#app = fastify();
  }

  handler(options) {
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

const server = new Server();

export { server };
