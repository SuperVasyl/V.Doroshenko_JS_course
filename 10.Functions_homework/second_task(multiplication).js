//First part for this task. Multiplication for two numbers

function multiplicateTwoNumbers(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}

let result = multiplicateTwoNumbers(2, 5);
console.log(`result for multiplication of TwoNumbers => ${result}`)

alert(`result for multiplication of TwoNumbers => ${result}`)

//function expression for first task
let multTwoNumbersExpression = function (fn, sn) {
    return fn * sn
}

let resultExp = multTwoNumbersExpression(2, 4);
console.log('result for multiplication of Two Numbers with expression => ' + resultExp)

alert(`result for multiplication of Two Numbers with expression => ${resultExp}`)


//second part for this task. Multiplication for three numbers

function multiplicateThreeNumbers(firstNumber, secondNumber, thirdNumber) {
    return firstNumber * secondNumber * thirdNumber
}

let result2 = multiplicateThreeNumbers(2, 5, 3);
console.log(`result for multiplication of three numbers => ${result2}`)

alert(`result for multiplication of three numbers => ${result2}`)

//function expression for second task
let multThreeNumbersExpression = function (fn, sn, tn) {
    return fn * sn * tn
}

let resultExp2 = multThreeNumbersExpression(2, 4, 3);
console.log('result for multiplication of Three Numbers with expression => ' + resultExp2)

alert(`result for multiplication of Three Numbers with expression => ${resultExp2}`)

//third part for this task. Exponent

function exponentWithTwoNumbers(firstNumber, secondNumber) {
    return firstNumber ** secondNumber
}

let result3 = exponentWithTwoNumbers(2, 5);
console.log(`result for exponent with two numbers => ${result3}`)

alert(`result for exponent with two numbers => ${result3}`)

//function expression for third task
let exponentTwoNumbersExpression = function (fn, sn) {
    return fn ** sn
}

let resultExp3 = exponentTwoNumbersExpression(2, 3);
console.log('result for exponent of Two Numbers with expression => ' + resultExp3)

alert(`result for exponent of Two Numbers with expression => ${resultExp3}`)