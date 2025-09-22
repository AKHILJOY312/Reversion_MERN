function cloneObject(obj) {
  const cloned = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = obj[key];
    }
  }

  return cloned;
}
const original = { name: "Alice", age: 30, city: "NYC" };
const clone = cloneObject(original);

console.log(clone); // { name: "Alice", age: 30, city: "NYC" }
console.log(clone === original); // false → different references ✅
clone.age = 99;
console.log(original.age); // 30 → unchanged ✅
