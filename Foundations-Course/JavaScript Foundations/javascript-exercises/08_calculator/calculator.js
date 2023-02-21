const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((a, b) => a + b, 0);
};

const multiply = function(array) {
  return array.length 
    ? array.reduce((a, b) => a * b) : 0;
};

const power = function(a, b) {
  // return Math.pow(a,b)
  return (a ** b)
};

const factorial = function(a) {
  if (a === 0) return 1;
  let prod = 1;
  for (let i = a; i > 0; i--) {
    prod *= i;
  }
  return prod
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