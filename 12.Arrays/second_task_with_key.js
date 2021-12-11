const nameAndAge = [
    ['name', 'Vasyl'],
    ['age', 26],
    // ['name', 'Andrew'],
    // ['age', 24],
    // ['name', 'Max'],
    // ['age', 15],
    // ['name', 'Igor'],
    // ['age', 22],
    // ['name', 'Daniel'],
    // ['age', 16]
];

console.table(nameAndAge)


let getNameAndAge = () => {
    for (let i = 0; i < nameAndAge.length/2; i++) {
        const obj = Object.fromEntries(nameAndAge);
        console.log(obj);
    }
}

// const obj = Object.fromEntries(nameAndAge);
// console.log(obj);


// function clonUser() {
//     for (let objectKey in user) {
//         console.log(`${objectKey}: ${user[objectKey]}`);
//     }
// }

