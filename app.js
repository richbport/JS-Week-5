function sum(n) {
  if (n === 1) {
    return 1; // Base case: Stop when n === 1
  }
  return n + sum(n - 1); // Recursive case: n + the sum of the smaller numbers
}

console.log(sum(5)); // Output: 15

/* 

First Call -> n = 5

returns 5 + sum(4)

Second Call -> n = 4

returns 4 -> n = 3

*/
