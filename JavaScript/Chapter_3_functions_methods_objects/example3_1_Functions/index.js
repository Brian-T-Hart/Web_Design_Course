function sayHello() {
    document.write('Hello!');
}

// sayHello();

function getProduct(num1, num2) {
    return num1 * num2;
}

// document.write(getProduct(4,7));

var area = function(width, height) {
    return width * height;
}

var size = area(3,4);
// document.write(size);

// var myAlert = (function() {
//     alert('This is an immediately invoked function expression');
// }());

// ------------variable scope-----------------

var x = "global scope";

function changeX() {
    x = "changed at function level";
}

// writeNum();
// document.write(x);
// The function has access to the variable because the variable was declared globally


function niceTry() {
    var y = "function-level variable";
}

niceTry();
document.write(y);  //This will throw an error because y is not defined globally