const wrapper = document.querySelector('.primary-wrapper');
let updateStatus;

let sqrMult = 10;
let sqrAmt = sqrMult * sqrMult;
let sqrSize = 1200 / sqrMult; 

for (let i = 0; i < sqrAmt; i++) {
    const square = document.createElement('div');

    square.id = 'div' + i;
    square.style.cssText =
        `
display: flex;
height: ${sqrSize / 2}px;
width: ${sqrSize / 2}px;
background-color: lightgrey;
`

    wrapper.appendChild(square);

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
