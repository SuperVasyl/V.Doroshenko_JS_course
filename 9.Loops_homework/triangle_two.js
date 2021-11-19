let height = 10;

let string = '';

for (i = 0; i < height; i++) {
    for (j = 0; j < height - i; j++) {
        string += '*'
    }
    string += '\n'
}
console.log(string)