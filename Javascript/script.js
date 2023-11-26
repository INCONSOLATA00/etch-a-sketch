const wrapper = document.querySelector('.wrapper');

(() => {
for(i = 0; i < 16 * 16; i++) 
{
const square = document.createElement('div');
square.style.cssText = 
`
display: flex;
align-content: flex-start; 

height: 37.5px;
width: 37.5px;
background-color: lightgrey;
`
wrapper.appendChild(square);
}

})();
