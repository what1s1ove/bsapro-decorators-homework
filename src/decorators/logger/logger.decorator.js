const logger = (logLevel) => {
  return (func) => {
    return (req, res) => {
      const { method, url } = req;

      console.log(`Log Level: ${logLevel} Method: ${method} URL: ${url}`);

      func.call(null, req, res);
    };
  };
};

export { logger };
