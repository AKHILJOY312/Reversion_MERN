// Deep freeze function

function deepFreeze(obj) {
  for (const prop of Object.keys(obj)) {
    const value = obj[prop];

    if (value && typeof value === "object" && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  }
  return Object.freeze(obj);
}
