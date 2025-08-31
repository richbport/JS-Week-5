function sumNestedArray(arr) {
  let total = 0;

  for (let item of arr) {
    if (Array.isArray(item)) {
      total += sumNestedArray(item);
    } else {
      total += item;
    }
  }

  return total;
}

console.log(sumNestedArray([1, [2, [3, 4], 5], 6]));
