const debounce = (delay) => {
  return (func) => {
    let lastTimeout = null;

    return (...args) => {
      clearInterval(lastTimeout);

      lastTimeout = setTimeout(() => func.call(null, ...args), delay);
    };
  };
};

export { debounce };
