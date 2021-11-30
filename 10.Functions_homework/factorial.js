function factorialize(number) {
    if (number < 0) {
        return -1;
    } else if (number === 0) {
        return 1;
    } else {
        return number * factorialize(number - 1);
    }
}

console.log(factorialize(5));