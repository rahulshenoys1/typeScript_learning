export {};

import * as readlineSync from "readline-sync";
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

console.log(`Number of elements in the array: ${numerOfElements}`); */

//3. print the elemets of an array in reverse order

const input = readlineSync.question(
  "Enter the elemets for the array(comma-seperated): "
); //readline-sync for synchroous user input
const myArray: number[] = input.split(",").map(Number); // split is used to conver the input string to array strings. map(Number) is used to convert the string to array

const reverseArray: number[] = [...myArray].reverse(); // ... used for shallow copy, reverse function is  used ro reverse the elements.

console.log("Orginal Array: ", myArray);
console.log("reversed Array: ", reverseArray);
