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