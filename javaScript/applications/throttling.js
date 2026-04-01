function throttle(func, limit) {
  let inThrottle = false;

  return function (...args) {
    const context = this;

    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;

      // Block further execution until the limit passes
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Usage
const handleScroll = throttle(() => console.log("Scroll logic"), 1000);
