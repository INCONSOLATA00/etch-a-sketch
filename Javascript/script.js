const wrapper = document.querySelector('.wrapper');
const square = document.createElement('div');
square.className = "square";

(() => {
for(i = 0; i < 16; i++) {
wrapper.append(square);
}
})();
