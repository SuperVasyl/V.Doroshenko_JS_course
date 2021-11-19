// let result = ''

// for (i = 0; i < 11; i++) {
//     result = result +'*'
//     .repeat(i)+'\n'
// }
// console.log(result)

let height = 10

let line = ''

for (i = 0; i < height; i++) {
    for (j = -1; j < i; j++) {
        line += '*'
    }
    line += '\n'
}
console.log(line)