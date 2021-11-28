function calcThreeNumbers(firstNumber, secondNumber, thirdNumber) {
    return firstNumber + secondNumber + thirdNumber
}

let sum = calcThreeNumbers(2, 5, 7);
console.log('sum for three Numbers => ' + sum)

alert(`sum for three Numbers => ${sum}`)

//function expression
let calcThreeNumbersExpression = function (fn, sn, tn) {
    return fn + sn + tn
}

let sum2 = calcThreeNumbersExpression(1, 4, 8);
console.log('sum for three Numbers with expression => ' + sum2)

alert(`sum for three Numbers with expression => ${sum2}`)