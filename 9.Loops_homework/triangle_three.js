let n = 10;
let result = '';
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
        result += ' ';
    }
    for (let k = 0; k < i; k++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);