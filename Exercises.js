"use strict";
// Bismillah
// Exercise 1
const N = 12345;
const minutes = Math.floor(N / 60);
const hours = Math.floor(minutes / 60);
const remainingMinutes = minutes % 60;
const seconds = N % 60;
console.log(`${hours} hours, ${remainingMinutes} minutes, ${seconds} seconds have passed since the beginning of the day.`);
