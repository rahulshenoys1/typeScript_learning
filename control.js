"use strict";
exports.__esModule = true;
/*
// 1. print helloworld 10 times to the monitor using, for while and do while control Statement
// while

let countWhile = 0;

while (countWhile < 10) {
  console.log("hello world!!!");
  countWhile++;
}

//do while
let countDoWhile = 0;

do {
  console.log("hello world");
  countDoWhile++;
} while (countDoWhile < 10);

//for
for (let i = 0; i < 10; i++) {
  console.log("Hello World");
}

//2. print hello with number to the monitor

for (let i = 1; i <= 10; i++) {
  console.log("hello " + i);
}

//3. print 1 to 10 to the monitor using for, while do while
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

let i=1;
do
{
    console.log(i);
    i++;
}while(i<=10);

//4. print off numbers form 1 to 100
function printOdd(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

printOdd(1, 100);

//5. print the even number except the number divisible by 10 from 1 to 100
function printEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0 && i % 10 !== 0) {
      console.log(i);
    }
  }
}

printEven(1, 100);

//6. print all non mupltiples of 3 between 100 to 1
function multiplesOfThree(start, stop) {
  for (let i = start; i >= stop; i--) {
    if (i % 3 !== 0) {
      console.log(i);
    }
  }
}

multiplesOfThree(100, 1);

//7. print even and the number or odd and the number between 1-100
function printEvenOrOdd(start, end) {
  for (let i = 1; i <= end; i++) {
    if (i % 2 === 0) {
      console.log("Even " + i);
    } else {
      console.log("Odd " + i);
    }
  }
}
printEvenOrOdd(1, 100);

//8. print "divisble" and the number if the num is divisible by 3 or 5 and not both between 1- 100
function divisibleBy3And5(start, end) {
  for (let i = start; i <= end; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 == 0)) {
      console.log("divisble " + i);
    }
  }
}

divisibleBy3And5(1, 100);

9.  Print multiplication tables for an int variable (say with value 15) from 1 to 10 to the monitor. Do this with for, while, do..while. Which do you think is the right control statement to use?
//for
let number = 15;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}

//while
let number = 15;
let i = 1;
while (i <= 10) {
  console.log(`${number} * ${i} = ${number * i}`);
  i++;
}

//do while
let number = 19;
let i = 1;
do {
  console.log(`${number} * ${i} = ${number * i}`);
  i++;
} while (i <= 10);


10. Print the multiplication tables for all values from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(`Muliplication table for ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log();
}

11.Have a variable containing a test score between 1-100. Now write a code snippet to
find out the grade of the score. If the score is > 90, then the grade is A. 70-90 -> B, 50-70 -
> C, 30-50 -> D, < 30 - FAIL. Verify the output with different scores.


function findGrade(score: number): string {
  let grade: string;
  if (score > 90) {
    grade = "A";
  } else if (score >= 70 && score <= 90) {
    grade = "B";
  } else if (score >= 50 && score < 70) {
    grade = "C";
  } else if (score >= 30 && score < 50) {
    grade = "D";
  } else {
    grade = "FAIL";
  }
  return grade;
}

const scores: number[] = [95, 80, 60, 40, 25];

scores.forEach((score) => {
  const grade = findGrade(score);
  console.log(`Score: ${score}, Grade:${grade}`);
});

//12. write a program to check if a given year(ina variable) is a leap year
function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const years: number[] = [2020, 2021, 2022, 2023, 2024];

years.forEach((year) => {
  const result = isLeapYear(year);
  console.log(`${year} is a leap year: ${result}`);
});

13. Write a program to print the number of days in a given month and year (1 implies Jan
    which means 31 should be printed out, 2 implies Feb which implies that 28 or 29 should be
    printed depending on whether the year is a leap year and so on). Do this by only using “if”
    and then with “switch”.


//while
function daysInMonthUsingIf(month: number, year: number): number {
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 9 ||
    month === 12
  ) {
    return 31;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  } else if (month === 2) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
  } else {
    return -1;
  }
}

const month = 2;
const year = 2024;
const result = daysInMonthUsingIf(month, year);
console.log(`${result} days in month ${month} of year ${year}`);


function daysInMonthUsingSwitch(month: number, year: number): number {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
    default:
      return -1;
  }
}

const month = 2;
const year = 2024;
const result = daysInMonthUsingSwitch(month, year);
console.log(`${result} days in month ${month} of year ${year}`);


14. Print ten powers of a number given (ex: if num is 2, print value of 2 pow 1, then 2 pow
    2, then 2 pow 3... till 2 pow 10).14) Given an int value, print all its divisors (if 10 is the num,
    divisors are 1,2,5,10. If 15 is the num, 1,3,5,15 are the divisors).


// ten power of a number
function printPowers(base: number, limit: number): void {
  for (let i = 1; i <= limit; i++) {
    const result = Math.pow(base, i);
    console.log(`${base}^${i}=${result}`);
  }
}
 
printPowers(2, 10);

//print Divisors of a Number
function printDivisors(num: number): void {
  console.log(`Divisors of ${num}`);
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      console.log(i);
    }
  }
}

printDivisors(15);

// 15. code a class named TestLoop with main() write the code when executed Print all numbers in 1 line till you get a multiple of 11. Then skip the multiple of 11 and print the next set of numbers in next line (till 300).

let number = 1;
while (number <= 300) {
  process.stdout.write(`${number} `); // it's a printing statement without moving to next line.
  if (number % 11 === 0) {
    console.log();
    number++;
  }
  number++;
}

16. Print all character symbols to monitor from 1 to 65535. You should leave a space after
each character symbol and if the numerical value is divisible by 5, you should skip to next
number (which control statement will help you to go to end of iteration?).


for (let symbolCode = 1; symbolCode <= 65535; symbolCode++) {
  process.stdout.write(String.fromCodePoint(symbolCode) + " "); //String.fromCodePoint is used to change numeric code to a string representing the character

  if (symbolCode % 5 === 0) {
    console.log();
    continue;
  }
}

// 17. pattern program
for (let i = 1; i <= 5; i++) {
  let line = " ";
  for (let j = 1; j <= i; j++) {
    line += j;
  }
  console.log(line);
}
*/
