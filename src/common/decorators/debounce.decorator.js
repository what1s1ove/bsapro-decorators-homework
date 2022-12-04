const debounce = (delay) => {
  return (cbFunction) => {
    let lastTimeout = null;

    return (...args) => {
      clearInterval(lastTimeout);

      lastTimeout = setTimeout(() => cbFunction.call(null, ...args), delay);
    };
  };
};

export { debounce };
