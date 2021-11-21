let height = 34;

let line = '';
let data = [1, 3, 5, 7, 9, 11, 13, 15, 17 , 19 , 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67]

for (i = 1; i <= height; i++) {
    for (j = 0; j <= height - i; j++) {
        line += '0'
    }
    for (k = 0; k < 2 * i - 1; k++) {
        line += '*'
    }
    line += '\n'
}

console.log(line)

// 2 * i - 1