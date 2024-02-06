const add = function (num1, num2) {
  return (num1 += num2);
};

const subtract = function (a, b) {
  return a - b;
};

// const sum = function (arr) {
//   let sum1 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum1 += arr[i];
//   }
//   return sum1;
// };

const sum = function (arr) {
  // let sum1 = 0;
  return arr.reduce((sum, el) => sum += el, 0)
};

const multiply = function (arr) {
  return arr.reduce((sum, el) => sum *= el, 1)
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if(num===0) return 1;
  let numbersss = 1;
  for (let i = num; i > 0; i--) {
      numbersss *= i;
  }
  return numbersss;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
