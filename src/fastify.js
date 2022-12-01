import fastifyServer from 'fastify';

class Fastify {
  #app;

  constructor() {
    this.#app = fastifyServer();
  }

  handler = (options) => {
    return (value) => {
      const { method, path } = options;

      this.#app.route({
        method,
        url: path,
        handler: value,
      });

      return value;
    };
  };

  listen(config) {
    const { port } = config;

    this.#app.listen({ port });
  }
}

const fastify = new Fastify();

export { fastify };
