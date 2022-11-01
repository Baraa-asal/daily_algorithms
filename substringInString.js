var string = "ABSHIZLMSHIZ HIZ hello HIZ plusHIZ"
var subStr = "HIZ"
var newStr = string.split("HIZ").join("");

console.log(string.length)
console.log(newStr.length)
console.log(subStr.length)
console.log(string.split("HIZ").join(""))

console.log(parseInt((string.length-newStr.length)/subStr.length))