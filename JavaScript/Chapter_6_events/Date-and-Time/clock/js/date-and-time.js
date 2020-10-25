var dateElement = document.createElement('h1'); //create element for the date
dateElement.id = 'date'; //give the element an id
document.body.appendChild(dateElement); //append the element to the body

var clockElement = document.createElement('h1'); //create an element for the time
clockElement.id = 'clock'; //give the element an id
document.body.appendChild(clockElement); //append the element to the body

var standardTime = 1;

document.getElementById('my-button').addEventListener('click', toggleTimeType);

function toggleTimeType() {
    if (standardTime) {
        standardTime = 0;
    }
    else {
        standardTime = 1;
    }
}

function startClock() {
    var today = new Date(); //create a new date object
    var M = today.getMonth() + 1; // returns the month as a number from 0 - 11 and adds 1
    var y = today.getFullYear(); //returns the 4 digit year
    var d = today.getDate(); //returns the day of the month
    var h = today.getHours(); //returns the hour of the day in current timezone
    var m = today.getMinutes(); //returns the minutes
    var s = today.getSeconds(); //returns the seconds
    var suffix = 'am';

    if (h >= 12) {
        suffix = 'pm';
    }

    if (h > 12) {
        if (standardTime) {
            h -= 12;
        }
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

    if (!standardTime) {
        suffix = '';
    }

    var theDate = M + '/' + d + '/' + y;
    dateElement.textContent = theDate;

    var time = h + ':' + m + ':' + s + ' ' + suffix;
    clockElement.textContent = time;
}

var runClock = setInterval(startClock, 1000);