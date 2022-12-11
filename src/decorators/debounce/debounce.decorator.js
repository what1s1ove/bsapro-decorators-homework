const debounce = delay => cb => {
  let lastTimeout = null;

  return (...args) => {
    clearInterval(lastTimeout);

    lastTimeout = setTimeout(() => cb.call(null, ...args), delay);
  };
};

export { debounce };
