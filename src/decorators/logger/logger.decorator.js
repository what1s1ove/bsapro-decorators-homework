const logger = (logLevel) => {
  return (value) => {
    return function (req, res) {
      const { method, url } = req;

      console.log(`Log Level: ${logLevel} Method: ${method} URL: ${url}`);

      value.call(this, req, res);
    };
  };
};

export { logger };
