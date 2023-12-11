"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
console.log("reversed Array: ", reverseArray); */
//4. program to copy all the elements of one array to another.
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function copyArray(source) {
    return __spreadArray([], source, true);
}
r1.question("Enter elements for the source array(comma-seperated): ", function (input) {
    var sourceArray = input.split(',').map(Number);
    var destinationArray = copyArray(sourceArray);
    console.log("Source Array: ", sourceArray);
    console.log("Destination Array: ", destinationArray);
    r1.close();
});
