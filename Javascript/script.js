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

    wrapper.appendChild(square); // despite appending square; actually appending it's new designation of square.id

    square.addEventListener('dragstart',(e)=>{
        e.preventDefault();
      })

    square.addEventListener('mousedown', function(e) {
        document.getElementById(e.target.id).style.backgroundColor = 'black';
    })

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

var slider = document.querySelector("#alsoRange");
slider.oninput = function() {

for (let i = 0; i < sqrAmt; i++) {

let squareId = document.getElementById('div' + i);
if(squareId) {

// remove event listener(s)

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

}}

