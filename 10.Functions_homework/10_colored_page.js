const button = document.querySelector('button');
const block = document.querySelector('block');

button.addEventListener('click', () => {
    let color = '#'
    color += Math.random().toString(16).slice(2, 8);
    console.log(color)
    button.style.backgroundColor = color;
})


// function getRandomColor () {
//     let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
//     return randomColor;
// }

// function randomize() {
//   document.getElementById('block1').style.color = getRandomColor();
// }