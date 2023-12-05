const wrapper = document.querySelector('.wrapper');
const button = document.querySelectorAll('button');

(() => {
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

const squareEngaged = () => {
    setInterval(function () { // initialize; - *IS RUN* 2ND
        console.log('indice held');
    }, 50);
}

if (square.onmousedown == true) {
    console.log('reached');
    square.addEventListener('mouseup', clearInterval(squareEngaged)); // listen for onmouseup after onmousedown
}

function clearInterval() { // *IS NOT RUN*
    clearInterval(squareEngaged);
}

square.addEventListener('mousedown', squareEngaged); // *IS RUN* 1ST

        wrapper.appendChild(square);
        square.addEventListener('mouseover', alsoSquare);
        function alsoSquare(e) {
        console.log(`runs ${e.target.id}`);
        }
    }
})();