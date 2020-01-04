/**
 * https://projecteuler.net/problem=2
 *
 */

function fib(nth: number): number {
  if (nth === 1) {
    return 1;
  }

  if (nth === 2) {
    return 2;
  }

  return fib(nth - 1) + fib(nth - 2)
}

function isEven(n: number): boolean {
  return n % 2 === 0;
}

let fibonacciIndex = 0;
let lastFibonacciNumber = 0;
let fibonacciAccumulator = 0;

while (true) {
  fibonacciIndex += 1
  lastFibonacciNumber = fib(fibonacciIndex);
  if (lastFibonacciNumber > 4000000) {
    break;
  }

  if (isEven(lastFibonacciNumber)) {
    fibonacciAccumulator += lastFibonacciNumber
  }
}

console.log(fibonacciAccumulator);