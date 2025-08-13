const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  if (arr.length < 1) {
    return 0;
  }
  return arr.reduce((acc, curr) => acc + curr);
};

const multiply = function (arr) {
  return arr.reduce((acc, curr) => acc * curr, 1);
};

const power = function (x, y) {
  let ans = x;
  for (let i = 0; i < y - 1; i++) {
    ans = ans * x;
  }
  return ans;
};

const factorial = function (x) {
  if (x === 0) {
    return 1;
  }
  let ans = x;
  for (let i = x - 1; i > 0; i--) {
    ans = ans * i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
