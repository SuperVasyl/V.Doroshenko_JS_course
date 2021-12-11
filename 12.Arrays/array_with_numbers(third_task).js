const array1 = [1, 3, 5, 3, 2, 6, 3, 11, 15, 3, 27, 45, 3, 47, 76, 3];

function returnArrayWithoutNumber(value) {
    newArray = array1.filter(item => item !== value)
    return newArray
}

console.log(returnArrayWithoutNumber(3));