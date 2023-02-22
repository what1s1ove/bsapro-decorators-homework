const debounce = (delay) => (value) => {
  let lastTimeout = null;

  return (...args) => {
    clearInterval(lastTimeout);

    lastTimeout = setTimeout(() => value.call(null, ...args), delay);
  };
}

export {debounce}
