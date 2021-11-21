let height = 34;

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
console.log(line)