//currying
function sum(x) {
  return function (y) {
    return x + y;
  };
}

const add = sum(2);
console.log(add(2));
