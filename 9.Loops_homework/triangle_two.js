let result = ''

for (i = 10; i > 0; i--) {
    result += '*'
    .repeat(i)+'\n'
}
console.log(result)