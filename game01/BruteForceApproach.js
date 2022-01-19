//Let M be a not empty set of integer numbers, find the first subset of 2 numbers of M which sum N. For instance, let's say we've got a set of numbers [2, 5, 8, 14, 0] and N = 10, the resulting subset should be [2, 8].

// Brute Force Approach

const pairWithSumBF = (array, N) => {
  let sum;
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    sum = 0;
    for (let j = i + 1; j < array.length; j++) {
      sum = array[i] + array[j];
      if (sum === N) {
        return [array[i], array[j]];
      }
    }
  }
  return [-1, -1];
};

// This approach has a Time Complexity O(n^2) and Space Complexity O(1)
array = [2, 5, 8, 14, 0];
N = 10;

console.log(`ans = ${pairWithSumBF(array, N)}\n`);
