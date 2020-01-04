/**
 * https://projecteuler.net/problem=1
 * 
 */

let accumulator: number = 0;
for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    accumulator += i;
  }
}

console.log(accumulator);