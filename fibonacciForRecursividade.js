const prompt = require("prompt-sync")();
let termValue = prompt("What is the value term for Fibonacci sequency? ");

function calculateFibonacciTerm(termNumber) {
  if (termNumber === 0) {
    return 0;
  }
  if (termNumber === 1) {
    return 1;
  }

  return (
    calculateFibonacciTerm(termNumber - 1) +
    calculateFibonacciTerm(termNumber - 2)
  );
}

console.log(
  `O valor do termo número ${termValue} da sequencia de fibonacci é ${calculateFibonacciTerm(
    termValue
  )}`
);
