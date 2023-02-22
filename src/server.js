import fastify from "fastify";

class AppServer {
  #server;
  #port;

  constructor(port) {
    this.#server = fastify();
    this.#port = port;
  }

  handleRoute({method, url}) {
    return (value) => {

      this.#server.route({
        method,
        url,
        handler: value,
      });

      return value;
    };
  }

  listen() {
    return this.#server.listen({port: this.#port})
  }
}

const server = new AppServer();

export {
  server
}
