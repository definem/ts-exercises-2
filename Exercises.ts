// Bismillah

// Exercise 1

const N: number = 12345; 
const minutes: number = Math.floor(N / 60);
const hours: number = Math.floor(minutes / 60);
const remainingMinutes: number = minutes % 60;
const seconds: number = N % 60;

console.log(
  `${hours} hours, ${remainingMinutes} minutes, ${seconds} seconds have passed since the beginning of the day.`
);


// Exercise 2

const A: number = 5;

if (A > 0) {
  console.log("The number A is positive.");
} else if (A === 0) {
  console.log("The number A is zero.");
} else {
  console.log("The number A is negative.");
}


// Exercise 3

const B: number = 7; 

if (B % 2 !== 0) {
  console.log("B is an odd number.");
} else {
  console.log("B is not an odd number.");
}


// Exercise 4

const C: number = 8; 

if (C % 2 === 0) {
  console.log("C is an even number.");
} else {
  console.log("C is not an even number.");
}


// Exercise 5

const M: number = 10; // Replace with the actual value of M
const s: number = 5; // Replace with the actual value of s
const a: number = 7; // Replace with the actual value of a
const b: number = 3; // Replace with the actual value of b

if (a > 0 && b > 0) {
  console.log("The sentence is correct.");
} else {
  console.log("The sentence is incorrect.");
}
