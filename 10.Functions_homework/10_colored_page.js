const button = document.querySelector('button');

// function getRandomColor () {
//     let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
//     return randomColor;
// }

// function randomize() {
//   document.getElementById('block1').style.color = getRandomColor();
// }


button.addEventListener("click", () => {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor)
    let randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor3 = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor4 = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor5 = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor6 = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor7 = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor8 = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor9 = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("background").style.backgroundColor = randomColor;
    document.getElementById("background1").style.backgroundColor = "#" + randomColor1;
    document.getElementById("background2").style.backgroundColor = "#" + randomColor2;
    document.getElementById("background3").style.backgroundColor = "#" + randomColor3;
    document.getElementById("background4").style.backgroundColor = "#" + randomColor4;
    document.getElementById("background5").style.backgroundColor = "#" + randomColor5;
    document.getElementById("background6").style.backgroundColor = "#" + randomColor6;
    document.getElementById("background7").style.backgroundColor = "#" + randomColor7;
    document.getElementById("background8").style.backgroundColor = "#" + randomColor8;
    document.getElementById("background9").style.backgroundColor = "#" + randomColor9;
})




// let string = '';
// for (i = 0; i < 10; i++) {
//     string += '#' + Math.floor(Math.random() * 16777215).toString(16);
//     string += '\n'
// }
// console.log(string)