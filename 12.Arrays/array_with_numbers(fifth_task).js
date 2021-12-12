const arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
const arr2 = [1, 2, 3, 5, 8, 13, 21];
const array3 = arr1.concat(arr2);

function getArrayFromTwoArrays(data) {
    return data.filter((value, index) => data.indexOf(value) !== index);
}
console.log('first solution =>', getArrayFromTwoArrays(array3));
// another solution
let array1  = [1, 2, 3, 4, 5, 6];
let array2 = [1, 3, 4, 5, 7, 8, 9];
let arr3 = array2.filter(function(obj) { 
    return array1.indexOf(obj) != -1; 
});

console.log('second solution =>', arr3);