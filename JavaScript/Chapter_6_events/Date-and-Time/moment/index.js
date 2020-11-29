// To use moment.js, simply add the following script tag in the head of your html
// <script src="https://momentjs.com/downloads/moment.min.js"></script>

document.getElementById('result').textContent = moment().format();
document.getElementById('test').addEventListener('keyup', updateResult);

function updateResult(e) {
    var result = moment().format(e.target.value);
    document.getElementById('result').textContent = result;
}


// Examples to try
var a = moment().format();                          // 2019-11-17T21:56:39-08:00
var b = moment().format('MMMM Do YYYY, h:mm:ss a'); // November 17th 2019, 9:49:55 pm
var c = moment().format("MMM Do YY");               // Nov 17th 19
var d = moment().format('MM/DD/YYYY');              // 11/17/2019
var e = moment().format('dddd');                    // Sunday
var f = moment().format('YYYY [escaped] YYYY');     // 2019 escaped 2019

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);