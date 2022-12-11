import fastify from 'fastify';

class Server {
  #instance;

  constructor() {
    this.#instance = fastify();
  }

  route = options => handler => {
    const { method, path } = options;

    this.#instance.route({
      method,
      url: path,
      handler,
    });

    return handler;
  }

  listen = (port) => this.#instance.listen(port);
}

export { Server };
