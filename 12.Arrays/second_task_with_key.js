let nameAndAge = [
    ['name', 'Vasyl'],
    ['age', 26],
    ['name', 'Andrew'],
    ['age', 24],
    ['name', 'Max'],
    ['age', 15],
    ['name', 'Igor'],
    ['age', 22],
    ['name', 'Daniel'],
    ['age', 16]
];

console.table(nameAndAge)


let getNameAndAge = () => {
    for (let i = 0; i < nameAndAge.length/2; i++) {
        const obj = Object.fromEntries(nameAndAge);
        console.log(obj);
    }
}

getNameAndAge()

// for (let i = 0; i < nameAndAge.length; i++) {
//     // get the size of the inner array
//     var innerArrayLength = nameAndAge[i].length;
//     // loop the inner array
//     for (let j = 0; j < innerArrayLength; j++) {
//         console.log('[' + i + ',' + j + '] = ' + nameAndAge[i][j]);
//     }
// }