const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
const arr2 = [1, 1, 2, 3, 5, 8, 13, 21];
const array3 = arr1.concat(arr2);

function getArrayFromTwoArrays(data) {
    return data.filter((value, index) => data.indexOf(value) !== index);
}
console.log(getArrayFromTwoArrays(array3));




// function getArray (arr1, arr2) {
//     let result = arr1.filter(arr1Item => !arr2.includes(arr1Item));
//     return result;
// }

// getArray()