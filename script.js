// ✅ 01. Write a program that prints the numbers from 1 to 100, but for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 == 0) {
    console.log("FIZZBUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else {
    console.log(i);
  }
}

// ✅ 02. Write a program that takes an array of integers and returns the sum of all the numbers in the array that are greater than 10.

const array = [10, 5, 15, 15];
let i = 0;
let totalSum = 0;

while (i < array.length) {
  if (array[i] > 10) {
    totalSum += array[i];
  }

  i++;
}
console.log(totalSum); //output --30

//✅ 03. Write a program that takes an array of integers and returns the average of all the numbers in the array.

const arr = [1, 2, 3, 8, 10, 2];

let sum = 0;
let averageNumber = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  averageNumber = sum / arr.length;
}

console.log(averageNumber.toFixed()); //output----4

// ✅ 04. You are a lumberjack and you have been tasked with cutting down trees in a forest. Each tree has a certain height, and you have been given a height threshold of 10. You can only cut down trees that are taller than the threshold.
// Write a program that takes an array of tree heights and outputs the total height of the trees that you can cut down.

const treeHight = [6, 8, 11, 14];

function lumberjack() {
  let i = 0;
  let totalHeight = 0;

  while (i < treeHight.length) {
    if (treeHight[i] > 10) {
      totalHeight += treeHight[i];
    }
    i++;
  }
  console.log(`The total height of cutted trees: ${totalHeight}`);
}
lumberjack(treeHight); //Output----25
