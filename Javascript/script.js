const wrapper = document.querySelector('.wrapper');
const button = document.querySelectorAll('button');
let status = false;

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

    wrapper.appendChild(square);
    square.addEventListener('mouseover', function(e) {
        if(updateStatus == true) {
            document.getElementById(e.target.id).style.backgroundColor = 'black';
        }
    })
}

window.addEventListener('mousedown', function() {
updateStatus = true;
}); 
window.addEventListener('mouseup', function() {
updateStatus = false;
});

// needs declare rule for disable mouse-grab*