var clockElement = document.createElement('h1'); //create an element for the time
clockElement.id = 'clock'; //give the element an id
document.body.appendChild(clockElement); //append the element to the body

function startClock() {
    var today = new Date(); //create a new date object
    var h = today.getHours(); //returns the hour of the day in current timezone
    var m = today.getMinutes(); //returns the minutes
    var s = today.getSeconds(); //returns the seconds
    var suffix = 'am';

    if (h >= 12) {
        suffix = 'pm';
    }

    if (h > 12) {
        h -= 12;
    }

    if (m < 10) {
        m = '0' + m;
    }

    if (s < 10) {
        s = '0' + s;
    }

    if (h == '0' || h == '00') {
        h = 12;
        suffix = 'am';
    }

    var time = h + ':' + m + ':' + s + ' ' + suffix;
    clockElement.textContent = time;
}

var runClock = setInterval(startClock, 1000);