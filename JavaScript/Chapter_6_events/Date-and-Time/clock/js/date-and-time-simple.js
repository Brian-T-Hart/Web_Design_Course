var dateElement = document.createElement('h1'); //create element for the date
dateElement.id = 'date'; //give the element an id
document.body.appendChild(dateElement); //append the element to the body

var clockElement = document.createElement('h1'); //create an element for the time
clockElement.id = 'clock'; //give the element an id
document.body.appendChild(clockElement); //append the element to the body

function simpleClock() {
    var d = new Date();
    var date = d.toLocaleDateString();
    var time = d.toLocaleTimeString();
    dateElement.textContent = date;
    clockElement.textContent = time;
}

var runClock = setInterval(simpleClock, 1000);