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

console.table(nameAndAge);

let getNameAndAge = () => {
    const obj = Object.fromEntries(nameAndAge);
    console.log(obj);
}

getNameAndAge();