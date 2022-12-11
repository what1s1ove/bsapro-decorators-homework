import {
  createLogger,
  format as winstonFormat,
  transports as winstonTransports,
} from 'winston';
import { LOGGER_TIMESTAMP_FORMAT } from './common/constants/constants.js';

class Logger {
  #instance;

  constructor({ env, logsPath }) {
    const levels = this.#getLevels();
    const level = this.#getCurrentLevel(env);
    const format = this.#getFormat();
    const transports = this.#getTransports({
      format,
      level,
      filename: logsPath,
    });

    this.#instance = createLogger({
      level,
      levels,
      format,
      transports,
    });
  }

  #getCurrentLevel = env => {
    const isDevelopment = env === 'development';
    return isDevelopment ? 'debug' : 'warn';
  };

  #getFormat = () => winstonFormat.combine(
    winstonFormat.colorize(),
    winstonFormat.timestamp({ format: LOGGER_TIMESTAMP_FORMAT }),
    winstonFormat.printf(
      (info) => {
        const timestamp = info.timestamp ? info.timestamp + ' ' : '';
        return `${timestamp}${info.level}: ${info.message}`;
      },
    ),
  );

  #getLevels = () => ({
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
  });

  #getTransports = ({ level, format, filename }) => [
    new winstonTransports.Console({
      level,
      format,
    }),
    new winstonTransports.File({
      filename,
      format,
    }),
  ];

  error(message) {
    this.#instance.error(message);
  }

  info(message) {
    this.#instance.info(message);
  }

  debug(message) {
    this.#instance.debug(message);
  }

  log = logLevel => cb => (req, res) => {
    const { method, url } = req;

    this[logLevel]?.(`Method: ${method}; URL: ${url}`);

    cb.call(null, req, res);
  };
}

export { Logger };
