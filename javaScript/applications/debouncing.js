function debounce(func, delay) {
  let timer;

  return function (...args) {
    const context = this;

    // Clear the previous timer to reset the wait period
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// Usage
const processChange = debounce(() => console.log("API Call"), 500);
