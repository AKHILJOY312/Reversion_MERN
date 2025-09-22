export const add = (task) => ({
  type: "ADD",
  payload: task,
});

export const remove = (index) => ({
  type: "REMOVE",
  payload: index,
});
