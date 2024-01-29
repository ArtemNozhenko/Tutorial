// function createReversedArray() {
//   const args = Array.from(arguments);
//   return args.toReversed();
// }

// console.log(createReversedArray(12, 85, 37, 4));
// console.log(createReversedArray(412, 371, 94, 63, 176));

function calculateTax(amount, taxRate = 0.2) {
  let sum = amount * taxRate;
  return sum;
}

console.log(calculateTax(100));
console.log(calculateTax(200, 0.2));
