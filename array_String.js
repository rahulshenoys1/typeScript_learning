"use strict";
exports.__esModule = true;
var readline = require("readline");
/*
//1. Program to print the elements of an array

const myArray = [90, 30, 40, 50, 10];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

const myArray = [1, 2, 3, 4, 5];

myArray.forEach((element) => {
  console.log(element);
});

// 2. program to print the number of elements present in an array

const myArray = [1, 2, 3, 4, 5];
const numerOfElements = myArray.length;

console.log(`Number of elements in the array: ${numerOfElements}`);

//3. print the elemets of an array in reverse order

const input = readlineSync.question(
  "Enter the elemets for the array(comma-seperated): "
); //readline-sync for synchroous user input
const myArray: number[] = input.split(",").map(Number); // split is used to conver the input string to array strings. map(Number) is used to convert the string to array

const reverseArray: number[] = [...myArray].reverse(); // ... used for shallow copy, reverse function is  used ro reverse the elements.

console.log("Orginal Array: ", myArray);
console.log("reversed Array: ", reverseArray);

//4. program to copy all the elements of one array to another.

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function copyArray(source: number[]): number[] {
  return [...source];
}

r1.question(
  "Enter elements for the source array(comma-seperated): ",
  (input) => {
    const sourceArray: number[] = input.split(",").map(Number);

    const destinationArray: number[] = copyArray(sourceArray);

    console.log("Source Array: ", sourceArray);
    console.log("Destination Array: ", destinationArray);

    r1.close();
  }
);

// 6. program to print the elements of an array of an array present on even position and also odd position
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printElemenntsInEvenOddPosition(elements: string[]): void {
  console.log("Elements in even positions: ");
  for (let i = 0; i < elements.length; i += 2) {
    console.log(elements[i]);
  }

  console.log("\n Elements in odd position");
  for (let i = 1; i < elements.length; i += 2) {
    console.log(elements[i]);
  }
}

r1.question("Enter the elements(comma-separated): ", (input) => {
  const elements: string[] = input.split(",");

  printElemenntsInEvenOddPosition(elements);

  r1.close();
});

// 8. program to print the sum of all the items of an array

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateSum(array: number[]): number {
  return array.reduce((sum, current) => sum + current, 0);
}

r1.question("Enter elements for the array(comma-seperated): ", (input) => {
  const numbers: number[] = input.split(",").map(Number);

  const sum: number = calculateSum(numbers);

  console.log(`Sum of array elements: ${sum}`);

  r1.close();
});

//9. program to print the product of all the items of an array

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateProduct(array: number[]): number {
  return array.reduce((product, current) => product * current, 1);
}

r1.question("Enter elements for the array(comma-seperated): ", (input) => {
  const numbers: number[] = input.split(",").map(Number);

  const product: number = calculateProduct(numbers);

  console.log(`product of array elements:${product}`);

  r1.close();
}); */
//10. program to print the even and odd numbers present in an array
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function seperateEvenOddNumbers(array) {
    var evenNumbers = [];
    var oddNumbers = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var number = array_1[_i];
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
        else {
            oddNumbers.push(number);
        }
    }
    return { even: evenNumbers, odd: oddNumbers };
}
r1.question("Enter elements for the array(comma -seperated):", function (input) {
    var numbers = input.split(",").map(Number);
    var result = seperateEvenOddNumbers(numbers);
    console.log("Even numbers: ", result.even);
    console.log("odd numbers: ", result.odd);
});
