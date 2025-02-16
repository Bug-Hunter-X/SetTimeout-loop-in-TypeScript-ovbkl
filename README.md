# setTimeout Loop in TypeScript

This repository demonstrates an uncommon error related to the use of `setTimeout` within a loop in TypeScript.  The issue arises from the asynchronous nature of `setTimeout`.  The loop iterates and completes before the `setTimeout` callbacks are executed, leading to unexpected results.

## Bug Description
The `printNumbers2` function aims to print numbers 1 through 5 with a delay. However, due to closure issues, it prints 6 five times.

## How to Reproduce
1. Clone the repository.
2. Compile and run `bug.ts`.
3. Observe the unexpected output.

## Solution
The solution involves creating a closure using an immediately invoked function expression (IIFE) to capture the value of `i` for each iteration.