questions()

function questions() {
    let choise = confirm('Say yes or no, please!');
    if (choise) {
        sayYes();
    } else {
        sayNo();
    }
}

function sayYes() {
    alert('Yes!!!');
}

function sayNo() {
    alert('Noooo!');
}

//function with expression

// let choiseWithExpression = function () {
//     let choiseExpr = confirm('Say yes or no, please!');
//     if (choiseExpr) {
//         sayYes();
//     } else {
//         sayNo();
//     }
// }

// choiseWithExpression()

// function sayYes() {
//     alert('Yes!!!');
// }

// function sayNo() {
//     alert('Noooo!');
// }