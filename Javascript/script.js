const wrapper = document.querySelector('.wrapper');

(() => {
for(let i = 0; i < 16 * 16; i++) 
{
const square = document.createElement('div' + i);

square.style.cssText = 
`
display: flex;
align-content: flex-start; 

height: 37.5px;
width: 37.5px;
background-color: lightgrey;
`
wrapper.appendChild(square);

square.addEventListener('mouseover', alsoSquare)
function alsoSquare(e) {
console.log(`runs ${e.target}`);   
}
}


})();


