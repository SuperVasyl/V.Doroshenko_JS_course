let array1 = [-4, 1, 2, 3, 5, 7, 8, 9, 11, 13, 15, 17, 19, 21];

function twoSum(arr, S) {
    var sums = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === S) {
                sums.push([arr[i], arr[j]]);
            }
        }
    }
    return sums;
}

console.log(twoSum(array1, 9));