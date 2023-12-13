const wrapper = document.querySelector('.primary-wrapper');
let updateStatus;

let sqrMult = 10;
let sqrAmt = sqrMult * sqrMult;
let sqrSize = 1200 / sqrMult; 

let square ;

for (let i = 0; i < sqrAmt; i++) {
    square = document.createElement('div');

    square.id = 'div' + i;
    square.style.cssText =
        `
display: flex;
height: ${sqrSize / 2}px;
width: ${sqrSize / 2}px;
background-color: lightgrey;
`

    wrapper.appendChild(square); // is new designation

    function l1(e) {
        e.preventDefault();
    }
    square.addEventListener('dragstart', l1);
    
    function l2(e) {
        document.getElementById(e.target.id).style.backgroundColor = 'black';
    }
    square.addEventListener('mousedown', l2);
    
    function l3(e) {
        if(updateStatus == true) {
            document.getElementById(e.target.id).style.backgroundColor = 'black';
        }
    }
    square.addEventListener('mouseover', l3);

}

// ------------------------------------------------------------------

window.addEventListener('mousedown', function() {
updateStatus = true;
}); 
window.addEventListener('mouseup', function() {
updateStatus = false;
});

// ------------------------------------------------------------------

var slider = document.querySelector("#alsoRange");
slider.oninput = function() {

for (let i = 0; i < sqrAmt; i++) {

let squareId = document.getElementById('div' + i);
if(squareId) {

// remove event listener(s)

square.removeEventListener('dragstart', l1);

square.removeEventListener('mousedown', l2);

square.removeEventListener('mouseover', l3);

square.parentNode.removeChild(squareId); 
}}

for (let i = 0; i < slider.value * slider.value; i++) {
square = document.createElement('div');

square.id = 'div' + i;
square.style.cssText =
        `
display: flex;
height: ${1200 / slider.value / 2}px;
width: ${1200 / slider.value / 2}px;
background-color: lightgrey;
`

wrapper.appendChild(square);

square.addEventListener('dragstart', l1);

square.addEventListener('mousedown', l2);

square.addEventListener('mouseover', l3);

}}

