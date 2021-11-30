getRandomNumber()

function getRandomNumber() {
    let num = Math.ceil(Math.random() * 10);
    let randNumber = prompt('Guess number between 1 and 10, please', 10)
    if (randNumber == num) {
        alert('Matched');
    } else alert(`Not mathed. The number was => ${num}`)
}