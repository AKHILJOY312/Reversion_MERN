// Deep freeze function

function deepFreeze(obj) {
  const props = Object.getOwnPropertyNames(obj);

  for (const prop of props) {
    const value = obj[prop];

    if (value && typeof value === "object" && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  }
  return Object.freeze(obj);
}
