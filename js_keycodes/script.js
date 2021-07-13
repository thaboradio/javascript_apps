

document.addEventListener('keydown', (event) => {
    getKeyCode(event);
})

function getKeyCode(event) {
var name = event.which || event.keyCode;
var keycodeStroke = document.getElementById("keycode-stroke");
keycodeStroke.innerHTML =  name;
}