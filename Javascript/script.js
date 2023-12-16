const wrapper = document.querySelector('.primary-wrapper');
let slider = document.querySelector("#alsoRange");

let sqrMult = 32;
let sqrAmt = sqrMult * sqrMult;
let sqrSize = 1200 / sqrMult;

let square ;
let elements;

let toggleProgressive = true;
let updateStatus;
let color = 'black';

function progressive(){ //  see rgba values*
if(toggleProgressive == true) {
toggleProgressive = false;
color = 'red';

} else if(toggleProgressive == false) {
toggleProgressive = true;
color = 'black';
}}

function yeet(){
while(elements.length > 0){
square.parentNode.removeChild(elements[0]);

square.removeEventListener('dragstart', l1);
square.removeEventListener('mousedown', l2);
square.removeEventListener('mouseover', l3);
}}

for (let i = 0; i < sqrAmt; i++) {

    square = document.createElement('div');
    square.className = 'dynamicDiv';
    elements = document.getElementsByClassName('dynamicDiv');
    square.id = 'div' + i;
    square.style.cssText =
        `
display: flex;
height: ${sqrSize / 2}px;
width: ${sqrSize / 2}px;
background-color: lightgrey;
`
    wrapper.appendChild(square); 
    
    function l1(e) {
        e.preventDefault();
}
    square.addEventListener('dragstart', l1);
    
    function l2(e) {
            document.getElementById(e.target.id).style.backgroundColor = color;
            console.log('runs');
    }
    square.addEventListener('mousedown', l2);
    
    function l3(e) {
        if(updateStatus == true && toggleProgressive == true) {
            document.getElementById(e.target.id).style.backgroundColor = color;

        } else if(updateStatus == true) {
            document.getElementById(e.target.id).style.backgroundColor = color;
        }
    }
    square.addEventListener('mouseover', l3);
}


window.addEventListener('mousedown', function() { // may exclusively be for l3
updateStatus = true;
}); 
window.addEventListener('mouseup', function() {
updateStatus = false;
});

slider.oninput = function() {

for (let i = 0; i < slider.value * slider.value; i++) {

let squareId = document.getElementById('div' + i);
if(squareId) { // do unique function for individual id's here
yeet();
}}

for (let i = 0; i < slider.value * slider.value; i++) {

square = document.createElement('div');
square.className = 'dynamicDiv'; 

elements = document.getElementsByClassName('dynamicDiv');
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

console.log(` slider pos ${slider.value}`);
}}

