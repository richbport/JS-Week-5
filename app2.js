function sumNestedArray(arr) {
  let total = 0;

  for (let item of arr) {
    if (Array.isArray(item)) {
        // If the item is an array, go deeper (recursive call)
      total += sumNestedArray(item);
    } else {
        // If it's a number, add it to the total
      total += item;
    }
  }

  return total;
}

console.log(sumNestedArray([1, [2, [3, 4], 5], 6])); // Output: 21

/* 

First Call:
Input: [1, [2, [3, 4], 5], 6]
total = 0

Iteration 1:
item = 1 (number)
We add it to the total: total = 0 + 1 = 1

Iteration 2:
item = [2, [3, 4], 5] (array)
We make a recursive call: total += sumNestedArray([2, [3, 4], 5])

Second Call:
Input: [2, [3, 4], 5]
total = 0

Iteration 1:
item = 2 (number)
We add it to the total: total = 0 + 2 = 2

Iteration 2:
item = [3, 4] (array)
We make a recursive call: total += sumNestedArray([3, 4])

Third Call:
Input: [3, 4]
total = 0

Iteration 1:
item = 3 (number)

*/
