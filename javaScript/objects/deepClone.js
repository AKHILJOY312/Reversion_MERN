function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}
