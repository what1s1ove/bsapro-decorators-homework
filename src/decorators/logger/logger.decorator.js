const logger = (logLevel) => (value) => {
  return (req, res) => {
    const { method, url } = req;

    console.log(`Log Level: ${logLevel} Method: ${method} URL: ${url}`);

    value.call(null, req, res);
  };
}

export {
  logger
}
