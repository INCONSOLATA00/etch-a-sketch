const wrapper = document.querySelector('.wrapper');
const button = document.querySelectorAll('button');
let array = [];


for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');

    square.id = 'div' + i;
    square.style.cssText =
        `
display: flex;
height: 37.5px;
width: 37.5px;
background-color: lightgrey;
`
    array.push(square);
    wrapper.appendChild(square);

    square.addEventListener('mouseover', alsoSquare);

    function alsoSquare(e) {
    console.log(`runs ${e.target.id}`);
    }
}

let theInterval;
let clickEvent = new Event('click');

function squareEngaged(e) {

    let targetId = e.target.id;
    if (targetId.startsWith('div')) {

    theInterval = setInterval(() => {
        console.log('mouse held');
        document.getElementById(e.target.id).dispatchEvent(clickEvent); // WORKS
        document.getElementById(e.target.id).style.backgroundColor = 'red';
    }, 300);
}}

function squareDisengaged() {
    console.log('(!)mouse held');
    clearInterval(theInterval);
}


window.addEventListener('mousedown', squareEngaged);
window.addEventListener('mouseup', squareDisengaged);

//Pseudo: on mousedown if(div.target.id ==...