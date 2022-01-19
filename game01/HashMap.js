//Let M be a not empty set of integer numbers, find the first subset of 2 numbers of M which sum N. For instance, let's say we've got a set of numbers [2, 5, 8, 14, 0] and N = 10, the resulting subset should be [2, 8].

// Hash Map Approach

const pairWithSumHM = (array, N) => {
  let map = new Map();
  let complement;
  console.log(array);

  for (let i = 0; i < array.length; i++) {
    complement = N - array[i];
    if (map.has(complement)) {
      return [array[i], array[map.get(complement)]];
    }
    map.set(array[i], i);
  }

  return [-1, -1];
};

// This approach has a Time Complexity O(n) and Space Complexity O(n)

array = [2, 5, 8, 14, 0];
N = 10;

console.log(`ans = ${pairWithSumHM(array, N)}\n`);
