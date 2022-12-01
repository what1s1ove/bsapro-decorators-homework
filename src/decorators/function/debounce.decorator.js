const debounce = (delay) => {
  return (value) => {
    let lastTimeout = null;

    return function (...args) {
      clearInterval(lastTimeout);

      lastTimeout = setTimeout(() => {
        value.call(this, ...args);
      }, delay);
    };
  };
};

export { debounce };
