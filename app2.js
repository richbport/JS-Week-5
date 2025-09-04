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

console.log(sumNestedArray([1, [2, [3, 4], 5], 6])); // First Call // Output: 21

/* 

arr =  [1, [2, [3, 4], 5], 6]

First Call:
Input: [1, [2, [3, 4], 5], 6]
total = 0

Iteration 1:
item = 1 (number)
We add it to the total: total = 0 + 1 = 1

Iteration 2:
item = [2, [3, 4], 5] (array)
We make a recursive call: total += sumNestedArray([2, [3, 4], 5]) === 14. total += 14 + 1 === 15

Second Call:
Input: [2, [3, 4], 5]
total = 0

Iteration 1:
item = 2 (number)
We add it to the total: total = 0 + 2 = 2

Iteration 2:
item = [3, 4] (array)
We make a recursive call: total += sumNestedArray([3, 4]) === 7 total === 9

Iteration 3:
item = 5 (number)
We add it to the total: total = 9 + 5 === 14

Third Call:
Input: [3, 4]
total = 0

Iteration 1:
item = 3 (number)
We add it to the total: total = 0 + 3 = 3

Iteration 2:
item = 4 (number)

We add it to the total: total = 3 + 4 = 7

We've reached the base case (no more arrays to process); so we return 7.

Back to Second Call:
sumNestedArray([3, 4]) returned 7
total = 2 + 7 = 9

Now, add 5: total = 9 + 5 = 14
We return 14

Back to First Call:
sumNestedArray([2, [3, 4] 5]) returned 14
total = 1 + 14 = 15

Now, add 6: total = 15 + 6 = 21
We return 21.

Final Answer:
The total sum is 21.

*/
