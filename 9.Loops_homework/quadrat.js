let height = 10;

let lineLength = '';

for (i = 0; i < height; i++) {
    for (j = 0; j < height; j++) {
        lineLength += '* '
    }
    lineLength += '\n'
}

console.log(lineLength)