let fullHeight = 34;
let line = '';

h = (fullHeight / 3);

for (y = 1; y <= h; y++) {
    for (j = 0; j <= fullHeight - y; j++) {
        line += ' '
    }
    for (x = 1; x <= y * 2 - 1; x++) {
        line += '*'
    }
    line += '\n'
}

for (y = 0; y < h; y++) {
    for (j = 0; j < y; j++) {
        line += ' ';
    }
    for (x = (fullHeight - y) * 2 - 1; x > 0; x--) {
        line += '*'
    }
    line += '\n'
}


for (y = h; y > 0; y--) {
    for (j = 1; j < y; j++) {
        line += ' '
    }
    for (x = ((fullHeight - y) + 1) * 2 - 2; x > 0; x--) {
        line += '*'
    }
    line += '\n';
}

for (y = h; y > 0; y--) {
    for (j = 0; j < fullHeight - y; j++) {
        line += ' ';
    }
    for (x = y * 2 - 1; x > 3; x--) {
        line += '*'
    }
    line += '\n'
}
console.log(line)