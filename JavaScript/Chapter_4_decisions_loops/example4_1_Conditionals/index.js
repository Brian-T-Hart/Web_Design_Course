const randomNumber = Math.floor(Math.random() * 10);

function multipleChoices1(randomNumber) {
    if (randomNumber > 8) {
        alert(randomNumber + ': You win!');
    }

    else if (randomNumber > 5) {
        alert(randomNumber + ': You are getting close');
    }

    else if (randomNumber > 1) {
        alert(randomNumber + ': Keep Trying!');
    }

    else {
        alert(randomNumber + ': Not your lucky day!');
    }
}

multipleChoices1(randomNumber);

function multipleChoices2(num) {

    switch (num) {
        case 9:
        case 8:
            document.write('You win!');
            break;
        case 7:
        case 6:
            document.write('You came in second place!');
            break;
        case 5:
        case 4:
        case 3:
        case 2:
            document.write('You got third place!');
            break;
        default:
            document.write('It\'s not your lucky day!');
            break;
    }
}

// multipleChoices2(randomNumber);
