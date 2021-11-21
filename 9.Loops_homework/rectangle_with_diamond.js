let height = 4;
let side = 1;
let hiddenSide = 1;
let hiddenSide2 = 2
let row = 13;
let line = '';

for (i = 0; i < row; i++) {
  line += '*';
}
line += '\n';

for (i = 1; i <= height; i++) {
  for (n = 0; n < side; n++) {
    line += '*';
  }
  for (m = 0; m < hiddenSide; m++) {
    line += ' ';
  }
  for (j = 0; j <= height - i; j++) {
    line += ' ';
  }
  for (k = 0; k < 2 * i - 1; k++) {
    line += '*';
  }
  for (b = 0; b < height - i; b++) {
      line += ' ';
  }
  for (m = 0; m < hiddenSide2; m++) {
    line += ' ';
  }
  for (n = 0; n < side; n++) {
    line += '*';
  }
  line += '\n';
}

for (i = 1; i < height; i++) {
  for (n = 0; n < side; n++) {
    line += '*';
  }
  for (m = 0; m < hiddenSide; m++) {
    line += ' ';
  }
  for (j = 0; j <= i; j++) {
    line += ' ';
  }
  for (k = (height - i) * 2 - 1; k > 0; k--) {
    line += '*';
  }
  for (b = 0; b < i; b++) {
      line += ' ';
  }
  for (m = 0; m < hiddenSide2; m++) {
    line += ' ';
  }
  for (n = 0; n < side; n++) {
    line += '*';
  }
  line += '\n';
}

for (i = 0; i < row; i++) {
  line += '*';
}
line += '\n';

console.log(line);
