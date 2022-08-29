
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        document.write('fizzbuzz <br>');
    } else if (i % 5 === 0) {
        document.write('buzz <br>');
    } else if (i % 3 === 0) {
        document.write('fizz <br>');
    } else {
        document.write(i + '<br>');
    }
}