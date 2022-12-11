const logger = logLevel => cb => (req, res) => {
  const { method, url } = req;

  console.log(`Log Level: ${logLevel} Method: ${method} URL: ${url}`);

  cb.call(null, req, res);
};

export { logger };
