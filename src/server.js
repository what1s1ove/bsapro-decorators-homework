import {AppConfig} from './common/enums/enums.js'
import fastify from "fastify";

class AppServer {
  #server;
  #config;

  constructor(config) {
    this.#server = fastify();
    this.#config = config;
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
    const {port} = this.#config
    return this.#server.listen({port})
  }
}

const server = new AppServer({port: AppConfig.PORT});

export {
  server
}
