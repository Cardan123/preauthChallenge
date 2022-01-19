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

// Binary Search Approach

const pairWithSumBS = (array, N) => {
  let mid, l, r, sum;
  array.sort((a, b) => a - b); // O(nlogn)
  console.log(array);

  for (let i = 0; i < array.length; i++) {
    l = i;
    r = array.length - 1;

    while (r >= l) {
      mid = Math.floor((l + r) / 2);
      sum = array[i] + array[mid];

      if (sum === N) {
        return [array[i], array[mid]];
      } else if (sum < N) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return [-1, -1];
};

// This approach has a Time Complexity O(nlogn) and Space Complexity O(1)

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

console.log(`ans = ${pairWithSumBF(array, N)}\n`);

array = [2, 5, 8, 14, 0];
N = 10;

console.log(`ans = ${pairWithSumBS(array, N)}\n`);

array = [2, 5, 8, 14, 0];
N = 10;
console.log(`ans = ${pairWithSumHM(array, N)}\n`);
