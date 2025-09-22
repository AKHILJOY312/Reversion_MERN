// loggerMiddleware.js
export const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Middleware: Dispatching action →", action);
  let result = next(action); // Pass action to next middleware or reducer
  console.log("Middleware: Updated state →", store.getState().counter.value);
  return result;
};
