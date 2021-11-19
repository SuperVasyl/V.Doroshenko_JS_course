let height = 10

let line = ''

for (i = 0; i < height; i++) {
    for (j = -1; j < i; j++) {
        line += '*'
    }
    line += '\n'
}
console.log(line)