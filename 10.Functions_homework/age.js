yourAge()

function yourAge() {
    let age = prompt('Please print you age')
    if (age <= 18 && age >= 0) {
        alert('You are too young for this')
    } else if (age < 0) {
        alert('Please, do not lie to me')
    } else if (age > 18 && age <= 90) {
        alert('You are welcome here!')
    } else if (age > 90 && age <= 110) {
        alert('Sorry, you are too old for this mess inside')
    } else if (age > 110) {
        alert('Such old people do not exist. Do not lie to me!')
    }
}