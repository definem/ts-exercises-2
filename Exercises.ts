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
