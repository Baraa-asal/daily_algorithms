// You are given two arrays of integers a and b of the same length, and an integer k.
// We will be iterating through array a from left to right, and simultaneously through array b from right to left, a
// nd looking at pairs (x, y), where x is from a and y is from b. Such a pair is called tiny if
// the concatenation xy is strictly less than k.

// Your task is to return the number of tiny pairs that you'll encounter during the simultaneous iteration through a and b.

function solution(a, b, k) {
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    let temp = `${a[i]}${b[b.length - 1 - i]}`;
    let numInt = parseInt(temp);

    if (numInt < k) {
      count++;
    }
  }
  return count;
}
