let height = 10;

let result = '';

for (let i = 1; i <= height; i++) {
    for (let j = 0; j < height - i; j++) {
        result += ' ';
    }
    for (let k = 0; k < i; k++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);