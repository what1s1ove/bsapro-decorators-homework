import { LogLevelToConsoleColor } from "../maps/maps.js";

const logger = (logLevel) => {
  return (cbFunction) => {
    return (req, res) => {
      const { method, url } = req;

      console.log(
        LogLevelToConsoleColor[logLevel],
        `Log Level: ${logLevel} Method: ${method} URL: ${url}`,
        LogLevelToConsoleColor.RESET
      );

      cbFunction.call(null, req, res);
    };
  };
};

export { logger };
