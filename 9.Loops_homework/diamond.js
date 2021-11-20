let height = 6;

let line = '';

for (i = 1; i <= height; i++) {
    for (j = 0; j <= height - i; j++) {
        line += ' '
    }
    for (k = 0; k < 2 * i - 1; k++) {
        line += '*'
    }
    line += '\n'
}

for (i = 1; i < height; i++) {
    for (j = 0; j <= i; j++) {
        line += ' '
    }
    for (k = (height - i) * 2 - 1; k > 0; k--) {
        line += '*'
    }
    line += '\n'
}
console.log(line)