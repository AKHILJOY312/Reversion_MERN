const user = {
  name: "AJ",
  age: 20,
};

const handler = {
  get: function (target, prop) {
    console.log(`Property "${prop}" was accessed.`);
    return target[prop];
  },
};

const proxyUser = new Proxy(user, handler);

console.log(proxyUser.name);
// Logs: Property "name" was accessed.
// Output: "AJ"
