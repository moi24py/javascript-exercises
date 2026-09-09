const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b ;
};

const sum = function(arr) {
	return arr.reduce( (tot, num) => tot += num, 0);
};

const multiply = function(arr) {
  return arr.reduce( (tot, num) => tot *= num, 1);
};

const power = function(x, n) {
	return Math.pow(x, n);
};

const factorial = function(n) {
  let fac = 1;
	while (n > 0) {
    fac *= n;
    n--;
  }
  return fac;
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
