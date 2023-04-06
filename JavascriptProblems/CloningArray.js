//Write a JavaScript function to clone an array.

// Cloning an array means creating an exact copy of the original array
// with the same elements in the same order. The cloned array should be
// a new instance of the Array object, and modifying the cloned array should
// not affect the original array or any of its elements.

// In JavaScript, arrays are reference types, meaning that assigning an array
// to a variable does not create a new array, but rather creates a reference
// to the original array. Modifying the array through one reference will also
// modify the original array, since both references point to the same underlying
// object. Cloning the array creates a new, separate instance of the array with the
// same elements, so that the cloned array can be modified without affecting the original array.

function cloneArray(array) {
    return [...array]; //spread operator
}
const originalArray = [1, 2, 3];
const clonedArray = cloneArray(originalArray);
console.log(originalArray);
console.log(clonedArray);
