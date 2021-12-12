let array1 = ['a', 'b', 'c', 'e'];
let array2 = ['s', 't', 'u', 'w', 'x'];
let array3 = ['O', 'Q', 'R', 'S'];
let array4 = ['a', 'b', 'c', 'd', 'e'];

const findMissingLetter = (array) => {
    for (let i = 1; i < array.length; i++) {
        const prev = array[i - 1].charCodeAt();
        const current = array[i].charCodeAt();
        if (current - prev !== 1) {
            return String.fromCharCode(prev + 1);
        }
    }
    return null;
}

console.log(findMissingLetter(array1));
console.log(findMissingLetter(array2));
console.log(findMissingLetter(array3));
console.log(findMissingLetter(array4));