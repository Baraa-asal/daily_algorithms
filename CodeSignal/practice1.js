//You are given an array of integers numbers and two integers left and right.
//Your task is to calculate a boolean array result, where result[i] = true if there exists an integer x,
//such that numbers[i] = (i + 1) * x and left ≤ x ≤ right. Otherwise, result[i] should be set to false.

function solution(numbers, left, right) {
  let results = [];
  let x;
  for (let i = 0; i < numbers.length; i++) {
    x = numbers[i] / (i + 1);
    if (Number.isInteger(x) && x >= left && x <= right) {
      results.push(true);
    } else {
      results.push(false);
    }
  }
  return results;
}

const numbers = [8, 5, 6, 16, 5];
const left = 1;
const right = 3;
console.log(solution(numbers, left, right));
