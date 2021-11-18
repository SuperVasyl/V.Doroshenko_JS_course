let n = 10;
let result = '';

for (let i = 0; i <= n - 1; i++) {
    for (let j = 0; j < i; j++) {
        result += ' ';
    }
    for (let k = 0; k < n - i; k++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);