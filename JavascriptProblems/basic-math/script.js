// Write a program that asks the user for two numbers and returns
// the sum, difference, product, and quotient of the two numbers.

function calculate() {
//Storing the input values in variables:
let firstNumber = parseFloat(document.getElementById("firstNumber").value);
let secondNumber = parseFloat(document.getElementById("secondNumber").value); 
//Making the arithmaic operations:
const sum = (firstNumber + secondNumber).toFixed(2);
const difference = (firstNumber - secondNumber).toFixed(2);
const product = (firstNumber * secondNumber).toFixed(2);
const quotient = (firstNumber / secondNumber).toFixed(2);
//Viewing them in HTML elements: 
document.getElementById('sum').innerText = sum;
document.getElementById('difference').innerText = difference;
document.getElementById('product').innerText = product;
document.getElementById('quotient').innerText = quotient;
}