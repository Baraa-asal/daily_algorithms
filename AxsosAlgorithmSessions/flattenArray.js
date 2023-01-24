const data = [[1, 2], 3, 4, [5, [6, 7]]];

function flatten(arr) {
    let flatArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatArray = flatArray.concat(flatten(arr[i]));
        }
        else {
            flatArray.push(arr[i]);
        }
    };

    return flatArray;
}

const newArray = flatten(data);

console.log(newArray);
console.log(data);

const flatData = [1, 2, 3, 4, 5, 6, 7];