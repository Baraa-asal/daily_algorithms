//first solution RUN TIME O(N square) ///////////////////////////////

// let rearrange = function (nums, indexOfElementToPutFirst) {
//     arrayOfMyElementAlone = nums.splice(indexOfElementToPutFirst, 1);
//     nums.splice(0, 0, arrayOfMyElementAlone[0]);
//     return nums;
//   };
  
// let productExceptSelf = function (nums) {
//     let product = 1;
//     let output = [];
//     let n = 1;
  
//     if (nums.length == 1 || nums.length == 0) {
//       return nums;
//     }
  
//     for (let i = 0; i < nums.length; i++) {
//       rearrangedArrayWithTheElementAtFirst = rearrange(nums, i);
//       // console.log(rearrangedArrayWithTheElementAtFirst);
//       while (n < rearrangedArrayWithTheElementAtFirst.length) {
//         product = product * rearrangedArrayWithTheElementAtFirst[0 + n];
//         n++;
//       }
//       output.push(product);
//       product = 1;
//       n = 1;
//     }
//     return output;
//   };


//second solution: /////////////////////////////
var productExceptSelf = function(nums) {
  var output = [];
  var leftMult = 1;
  var rightMult = 1;
  for (var i=nums.length - 1; i >= 0; i--) {
      output[i] = rightMult;
      rightMult *= nums[i];
  }
  for (var j=0; j < nums.length; j++) {
      output[j] *= leftMult;
      leftMult *= nums[j];
  }
  return output;
};
let nums = [-1, 1, 0, -3, 3]
console.log(productExceptSelf(nums))