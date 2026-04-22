const userObject = {
  name: "AJ",
  age: 20,
};

const handlerObject = {
  get: function (targetedObject, prop) {
    console.log(`Property "${prop}" was accessed.`);
    return targetedObject[prop];
  },
};

const proxyUser = new Proxy(userObject, handlerObject);

console.log(proxyUser.name);
// Logs: Property "name" was accessed.
// Output: "AJ"
