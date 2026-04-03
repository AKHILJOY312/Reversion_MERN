// middleware 1
export const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Dispatching:", action);
  const result = next(action);
  console.log("Next State:", store.getState());
  return result;
};

// middleware 2
export const blockResetMiddleware = (store) => (next) => (action) => {
  if (action.type === "counter/reset") {
    console.log("Reset blocked!");
    return;
  }
  return next(action);
};
