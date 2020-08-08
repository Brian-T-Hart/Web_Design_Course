var time = 5 * 60 * 1000; // 5 minutes

var timer = document.createElement('h1');
timer.id = 'timer'; 
document.body.appendChild(timer);

var x = setInterval(function() {
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes == 0) {
        minutes = '00'
    }
    var seconds = Math.floor((time % (1000 * 60)) / 1000);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    timer.textContent = minutes + ':' + seconds;

    if (time <= 0) {
        clearInterval(x);
        timer.textContent = 'Time Expired';
    }

    time -= 1000;
}, 1000);