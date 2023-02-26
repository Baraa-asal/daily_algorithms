// Given an array of integers a, your task is to count the number of pairs i and j (where 0 ≤ i < j < a.length),
// such that a[i] and a[j] are digit anagrams.

// Two integers are considered to be digit anagrams if they contain the same digits. In other words, one can be
// obtained from the other by rearranging the digits (or trivially, if the numbers are equal).
// For example, 54275 and 45572 are digit anagrams, but 321 and 782 are not (since they don't contain the same digits).
// 220 and 22 are also not considered as digit anagrams, since they don't even have the same number of digits.

function solution(a) {
    const map = {}; 
    let result = 0;
for(let i = 0; i < a.length; i++){
    const orderedNumber = orderDigits(a[i]);
   
    if(orderedNumber in map){
        map[orderedNumber] = map[orderedNumber] + 1;
        
    } else {
        //initialize if not there
        map[orderedNumber] = 1;
    }
}
console.log(map)
const values = Object.values(map);
for(index in values){
    let value = values[index] -1 ;
    console.log("value: " , value)
    while(value > 0){
        result += value;
        value--;
    }
}
return result;
}

// a function that orders a number descending
function orderDigits(number) {
    return number.toString().split("").sort((a, b) => {return b-a}).join('')
}



//test case: 
let a = [25, 35, 872, 228, 53, 278, 872];
console.log(solution(a))
