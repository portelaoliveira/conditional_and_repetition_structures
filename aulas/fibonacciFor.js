const prompt = require("prompt-sync")();
let termValue = prompt("What is the value term for Fibonacci sequency? ");

function calculateFibonacciTerm(termNumber) {
  let lastTerm = 1;
  let secondToLast = 0;

  if (termNumber === 0) {
    return 0;
  }
  for (
    currentIteration = 1;
    currentIteration < termNumber;
    currentIteration++
  ) {
    let auxVar = lastTerm + secondToLast;
    secondToLast = lastTerm;
    lastTerm = auxVar;
  }
  return lastTerm;
}

console.log(
  `O valor do termo número ${termValue} da sequencia de fibonacci é ${calculateFibonacciTerm(
    termValue
  )}`
);
