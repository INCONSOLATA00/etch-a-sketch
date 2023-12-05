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
let theInterval;

function squareEngaged() {
// if(theInterval) { clearInterval(theInterval);}
theInterval = setInterval(() => { console.log('mouse held');
},350); 
}

function squareDisengaged() {
console.log('(!)mouse held');
clearInterval(theInterval);    
}
if (document.onmousedown == false) { // *prevent instance overlap*
document.addEventListener('mousedown', squareEngaged);
}
document.addEventListener('mouseup', squareDisengaged);

        wrapper.appendChild(square);
        square.addEventListener('mouseover', alsoSquare);
        function alsoSquare(e) {
        console.log(`runs ${e.target.id}`);
        }
    }
})();