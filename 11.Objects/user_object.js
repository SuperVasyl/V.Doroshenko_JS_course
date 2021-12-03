let user = {
    firstName: 'Vasyl',
    lastName: 'Doroshenko',
    age: 26,
    sex: 'male',
    adress: {
        country: 'Ucraine',
        sity: 'L`viv',
        index: 77415,
    },
    education: 'Ucrainian Catolic University',
    specialty: 'History',
    workArea: 'ecology',
    proffecion: 'Garbage seller',
    hobby: {
        lazyHobby: 'series',
        intelectual: 'reading books',
        active: 'walking in the mountains',
        service: {
            firstService: 'for children in Sunday school',
            secondService: 'for teenagers in Reverse team',
            thirsServise: 'for the poor and retirees in sity'
        },
        fun: 'videogames'
    },
    languages: {
        first: 'Ucrainian',
        second: 'Russian',
        third: 'Polish',
        fourth: 'English',
        fifth: 'German'
    },
    colorOfEyes: 'brown'
}

clonUser()

function clonUser() {
    for (let objectKey in user) {
        console.log(objectKey, ':', user[objectKey]);
    }
}

// function clonUser() {
//     for (let objectKey in user) {
//         console.log(`${objectKey}: ${user[objectKey]}`);
//     }
// }