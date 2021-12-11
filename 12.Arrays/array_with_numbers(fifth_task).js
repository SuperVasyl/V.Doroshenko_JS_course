const arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
const arr2 = [1, 2, 3, 5, 8, 13, 21];
const array3 = arr1.concat(arr2);

function getArrayFromTwoArrays(data) {
    return data.filter((value, index) => data.indexOf(value) !== index);
}
console.log(getArrayFromTwoArrays(array3));