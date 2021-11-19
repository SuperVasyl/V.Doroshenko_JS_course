let height = 10;

let result = '';

for (let i = 0; i <= height; i++) {
    for (let j = 0; j < i; j++) {
        result += '0';
    }
    for (let k = 0; k < height - i; k++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);