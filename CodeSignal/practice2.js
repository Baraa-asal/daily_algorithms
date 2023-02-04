//Given an array of integers a, your task is to calculate the digits that occur the most number of times in the array.
//Return the array of these digits in ascending order.

function solution(a) {
  // let numbersArray = [];
  // let buffer;
  // for(let i = 0; i < a.length; i++){
  //     buffer = a[i].toString().split("").map(Number);
  //     numbersArray = numbersArray.concat(buffer);
  // }
  // return numbersArray;
  let result;
  let occurances = {};
  let flatMappedArray = a.flatMap((x) => x.toString().split("").map(Number));
  for (let i = 0; i < flatMappedArray.length; i++) {
    if (occurances[flatMappedArray[i]]) {
      occurances[flatMappedArray[i]]++;
    } else {
      occurances[flatMappedArray[i]] = 1;
    }
  }
  
  let max = Math.max(...Object.values(occurances));
  result = Object.keys(occurances).filter((key) => occurances[key] == max);
  return result;
}

const a = [55, 22, 3, 572, 38, 41];
console.log(solution(a));
