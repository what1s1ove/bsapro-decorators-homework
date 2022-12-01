const handler = (options) => {
  return (value, { addInitializer }) => {
    const { method, path } = options;

    addInitializer(function () {
      this.app.route({
        method,
        url: path,
        handler: value,
      });
    });
  };
};

export { handler };
