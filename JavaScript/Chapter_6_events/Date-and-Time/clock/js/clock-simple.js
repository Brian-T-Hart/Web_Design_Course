var clockElement = document.createElement('h1'); //create an element for the time
clockElement.id = 'clock'; //give the element an id
document.body.appendChild(clockElement); //append the element to the body

function simpleClock() {
    var d = new Date();
    var time = d.toLocaleTimeString();
    clockElement.textContent = time;
}

var runClock = setInterval(simpleClock, 1000);