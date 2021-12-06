let generateButton = document.querySelector('button');
// let generateButton = document.getElementById('button'); //generate-btn
let linearColor = document.getElementById('linear-color'); //utputColor
let textColorCode = document.getElementById('text-color-code'); //output-code
let block1 = document.getElementById('block1');
let block2 = document.getElementById('block2');
let block3 = document.getElementById('block3');
let block4 = document.getElementById('block4');
let block5 = document.getElementById('block5');
let block6 = document.getElementById('block6');
let block7 = document.getElementById('block7');
let block8 = document.getElementById('block8');
let block9 = document.getElementById('block9');
let block0 = document.getElementById('block0');


let letters = '0123456789ABCDEF';

function getRandomColor() {
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let generateBlockColor = () => {
    let colorOne = getRandomColor();
    let colorTwo = getRandomColor();
    let colorThree = getRandomColor();
    let colorFour = getRandomColor();
    let colorFive = getRandomColor();
    let colorSix = getRandomColor();
    let colorSeven = getRandomColor();
    let colorEight = getRandomColor();
    let colorNine = getRandomColor();
    let colorTen = getRandomColor();

    linearColor.style.background = `linear-gradient(90deg, ${colorOne}, ${colorTwo}, ${colorThree}, ${colorFour}, ${colorFive}, ${colorSix}, ${colorSeven}, ${colorEight}, ${colorNine}, ${colorTen})`;

    block1.style.backgroundColor = `${colorOne}`;
    block2.style.backgroundColor = `${colorTwo}`;
    block3.style.backgroundColor = `${colorThree}`;
    block4.style.backgroundColor = `${colorFour}`;
    block5.style.backgroundColor = `${colorFive}`;
    block6.style.backgroundColor = `${colorSix}`;
    block7.style.backgroundColor = `${colorSeven}`;
    block8.style.backgroundColor = `${colorEight}`;
    block9.style.backgroundColor = `${colorNine}`;
    block0.style.backgroundColor = `${colorTen}`;
}

generateButton.addEventListener('click', generateBlockColor);
window.onload = generateBlockColor;