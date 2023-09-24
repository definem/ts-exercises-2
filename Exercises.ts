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
