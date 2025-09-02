function sum(n) {
  if (n === 1) {
    return 1; // Base case: Stop when n === 1
  }
  return n + sum(n - 1); // Recursive case: n + the sum of the smaller numbers
}

console.log(sum(5)); // Output: 15

/* 

First Call -> n = 5

returns 5 + 10 (sum(4) === 10)

Second Call -> n = 4

returns 4 + 6 (sum(3) === 6)

Third Call -> n = 3

returns 3 + 3 (sum(2) === 3)

Fourth Call -> n = 2

returns 2 + 1 (sum(1) === 1)

Fifth Call -> n = 1

returns 1

sum(1) === 1

*/
