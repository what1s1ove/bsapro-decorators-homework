import fastify from 'fastify';

class FastifyServer {
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

export { FastifyServer };
