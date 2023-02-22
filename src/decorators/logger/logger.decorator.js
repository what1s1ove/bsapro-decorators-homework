const logger = (logLevel) => (value, context) => {
  console.log(value, context)
  // const {method, url} = req;
  //
  // console.log(`Log Level: ${logLevel} Method: ${method} URL: ${url}`);
  //
  // value.call(null, req, res);
  return value
}

export {
  logger
}
