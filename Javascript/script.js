
const alsoProg = document.querySelector('.progressive');
const alsoOrganic = document.querySelector('.organic');
const wrapper = document.querySelector('.see-squares');

alsoProg.addEventListener('click', progressive); 
alsoOrganic.addEventListener('click', organic);

function colorSelector(){
console.log('called');

let colors = ['LightSalmon', 'DeepSkyBlue', 'CornflowerBlue', 'LightCyan', 'LightSkyBlue'];
let randomColor = Math.floor(Math.random() * 5);
let newColor = colors[randomColor];
return newColor;
}

let slider = document.querySelector("#alsoRange");
let sqrMult = 32;
let sqrAmt = sqrMult * sqrMult;
let sqrSize = 1200 / sqrMult;

let square ;
let elements;

let toggleProgressive = true;
let toggleOrganic = true;

let updateStatus;
let color = '#333333';

// ---------------------------

function progressive(){
if(toggleProgressive == true) {
toggleProgressive = false;

color = 'cyan'; 

} else if(toggleProgressive == false) {
toggleProgressive = true;

color = '#333333';
}}

// ---------------------------

function organic(){
if(toggleOrganic == true) {
toggleOrganic = false;

color = 'orange'; 

} else if(toggleOrganic == false) {
toggleOrganic = true;

color = '#333333';
}}

// ---------------------------

function yeet(){
while(elements.length > 0){
square.parentNode.removeChild(elements[0]);

square.removeEventListener('dragstart', l1);
square.removeEventListener('mousedown', l2);
square.removeEventListener('mouseover', l3);}}

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
background-color: #fafafa;
`

    wrapper.appendChild(square);
    
    function l1(e) {
    e.preventDefault();
}
    square.addEventListener('dragstart', l1);
    
    function l2(e) {

        let defaultColor = document.getElementById(e.target.id);
        if(toggleProgressive == false) {

        defaultColor.style.backgroundColor = color;
        let alsoDefaultColor = +defaultColor.style.opacity;
        defaultColor.style.opacity = alsoDefaultColor += 0.1;

        } else if(toggleProgressive == true) {
        document.getElementById(e.target.id).style.backgroundColor = color;
        }
    }
    square.addEventListener('mousedown', l2);
    
    function l3(e) {
    // colorSelector(); // TEMP LOCATION
        let defaultColor = document.getElementById(e.target.id);
        if(updateStatus == true && toggleProgressive == true) {

            defaultColor.style.backgroundColor = color;
            defaultColor.style.opacity = 1; 

        } else if(updateStatus == true && toggleProgressive == false) {
            
            defaultColor.style.backgroundColor = color;
            let alsoDefaultColor = +defaultColor.style.opacity;
            defaultColor.style.opacity = alsoDefaultColor += 0.1;

        } else if (updateStatus == true && toggleOrganic == true) {
            
            defaultColor.style.backgroundColor = newColor;
            defaultColor.style.opacity = 1; 

        } else if (updateStatus == true) {

            defaultColor.style.backgroundColor = '#333333'; // UNIQUE EXCEPTION
            defaultColor.style.opacity = 1; 

        }

}
    square.addEventListener('mouseover', l3); // SEE HERE
}

window.addEventListener('mousedown', function() {
updateStatus = true;
}); 
window.addEventListener('mouseup', function() {
updateStatus = false;});

slider.oninput = function() {

for (let i = 0; i < slider.value * slider.value; i++) {

let squareId = document.getElementById('div' + i);
if(squareId) {
yeet();}}

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
background-color: #fafafa;
`

wrapper.appendChild(square);                    // SEE ABOVE
square.addEventListener('dragstart', l1);
square.addEventListener('mousedown', l2);
square.addEventListener('mouseover', l3);

console.log(` slider pos ${slider.value}`);
}}