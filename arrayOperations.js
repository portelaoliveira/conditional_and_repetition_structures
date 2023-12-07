const regularArray = [2, 5, 2, 7, 1, 3, 4, 7];

// Usando While

// let count = 0;
// while (count < regularArray.length) {
//   regularArray[count] += count;
//   count++;
// }

// console.log("O array atual é: ", regularArray);

// Usando For

for (let count = 0; count < regularArray.length; count++) {
  regularArray[count] += count;
}

console.log("O array atual é: ", regularArray);
