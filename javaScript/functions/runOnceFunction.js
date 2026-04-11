function runOnce(fn) {
  let called = false;

  return function () {
    if (!called) {
      called = true;
      return fn();
    }
  };
}

const init = runOnce(() => console.log("Run once"));

init();
init();
init();
