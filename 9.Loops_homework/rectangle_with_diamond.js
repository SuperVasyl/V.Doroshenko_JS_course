let rectangle = 9
let length = 13
let height = 4;
let string = ''


for (i = 0; i < rectangle; i++) {
    for (j = 0; j < length; j++) {
        if (i === 0 || i === rectangle - 1) {
            string += '*'
        } else {
            if (j === 0 || j === length - 1) {
                string += '*'
            } else {
                // for (i = 1; i <= 4; i++) {
                //     string += '0'
                // }
                // for (i = 1; i <= height; i++) {
                //     for (j = 0; j <= height - i; j++) {
                //         string += '0'
                //     }
                //     for (k = 0; k < 2 * i - 1; k++) {
                //         string += '*'
                //     }
                //     string += '\n'
                // }
                // for (i = 1; i < height; i++) {
                //     for (j = 0; j <= i; j++) {
                //         string += ' '
                //     }
                //     for (k = (height - i) * 2 - 1; k > 0; k--) {
                //         string += '*'
                //     }
                //     string += '\n'
                // }
                string += ' '
            }
        }
    }
    string += '\n'
}
console.log(string)









// let rectangle  = 9
// let length = 13
// let string = ''

// for (i = 0; i < rectangle; i++) {
//     for (j = 0; j < length; j++) {
//         if (i === 0 || i === rectangle - 1) {
//             string += '*'
//         }
//         else {
//             if (j === 0 || j === length - 1) {
//                string += '*' 
//             }
//             else {
//                 string += ' '
//             }
//         }
//     }
//     string += '\n'
// }
// console.log(string)



// let height = 4;
// let line = '';

// for (i = 1; i <= height; i++) {
//     for (j = 0; j <= height - i; j++) {
//         line += ' '
//     }
//     for (k = 0; k < 2 * i - 1; k++) {
//         line += '*'
//     }
//     line += '\n'
// }

// for (i = 1; i < height; i++) {
//     for (j = 0; j <= i; j++) {
//         line += ' '
//     }
//     for (k = (height - i) * 2 - 1; k > 0; k--) {
//         line += '*'
//     }
//     line += '\n'
// }
// console.log(line)