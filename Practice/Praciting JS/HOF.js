// function add(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function calculator(num1, num2, calculate) {
//   return calculate(num1, num2);
// }

// let sum = calculator(2, 4, add);

// console.log(sum);

function createDiscountcalculator(discountPercentage) {
  function percentageCalculator(price) {
    return price - price * discountPercentage;
  }

  return percentageCalculator;
}

// 1. Create your specific calculators
const applyHalfOff = createDiscountcalculator(0.5);

// 2. Use them to calculate prices
console.log(applyHalfOff); // Expected Output: 80
