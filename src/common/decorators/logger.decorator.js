import { logLevelToConsoleColor } from "../maps/maps.js";

const logger = (logLevel) => {
  return (cbFunction) => {
    return (req, res) => {
      const { method, url } = req;

      console.log(
        logLevelToConsoleColor[logLevel],
        `Log Level: ${logLevel} Method: ${method} URL: ${url}`,
        logLevelToConsoleColor.reset
      );

      cbFunction.call(null, req, res);
    };
  };
};

export { logger };
