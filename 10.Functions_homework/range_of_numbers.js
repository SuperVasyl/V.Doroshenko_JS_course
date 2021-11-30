function rangeOfNum(firstNum, lastNum) {
    if (lastNum - firstNum === 0) {
        return [firstNum];
    } else {
        let numbers = rangeOfNum(firstNum, lastNum - 1);
        numbers.push(lastNum);
        return numbers;
    }
}

console.log(rangeOfNum(3, 10))



// function rangeOfNumbers(startNum, endNum) {
//     if (startNum - endNum === 0) {
//         return [startNum];
//     } else {
//         let numbers = rangeOfNumbers(startNum + 1, endNum);
//         numbers.unshift(startNum);
//         return numbers;
//     }
// }
// console.log(rangeOfNumbers(3, 8))