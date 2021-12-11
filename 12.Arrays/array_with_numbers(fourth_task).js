array1 = [1, 3, 5, 3, 2, 6, 3, 6, 2, 4, 7, 8, 9, 4, 3, 2, 1, 1, 15, 13, 11, 4, 15];

function removeDublicates(data) {
    return [...new Set(data)]
}

console.log(removeDublicates(array1));