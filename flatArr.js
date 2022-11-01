function flattenArr(arr) {
    var newArr = [];
    // if (!arr) return null;
    // else if (arr.length < 1) return null;
    // else {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                // temp = flattenArr(arr[i]);
                // if (temp) {
                    newArr = newArr.concat(flattenArr(arr[i]));
                // }
            }
            else {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    // }
}

data = [1, 2, [3, 4, [9, 8]], 5, []];
console.log(data);
console.log(flattenArr(data));
// flattenArr(data).forEach(element => console.log(element))