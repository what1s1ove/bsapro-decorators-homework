const initRouteHandler = (options, app) => {
  return (func) => {
    const { method, path } = options;

    app.route({
      method,
      url: path,
      handler: func,
    });

    return func;
  };
};

export { initRouteHandler };
