var person = {
    firstName: 'Brian',
    lastName: 'Hart',
    age: 43,
    isMarried: true,
    numOfKids: 3,
    getFullName() {
        return (this.firstName + ' ' + this.lastName);
    },
    displayGreeting() {
        alert('Hi. My name is ' + this.getFullName() + '.');
    }
}

/*
person.displayGreeting(); //call the person's displayGreeting method

if (person.isMarried == true) {
    document.write('<h1>Wow ' + person.firstName + '. You are a lucky fellow!</h1><br />');
}

if (person.numOfKids > 2) {
    document.write('<h1>Wow ' + person.firstName + '. You look tired!</h1><br />');
}
*/

// constructor function 
function Car(make, model, year) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.listingTitle = function() {
        return ('<h1>' + this.year + ' ' + this.make + ' ' + this.model + '</h1>');
    }
}

var myCar = new Car('Honda', 'Civic', 2005);
console.log(myCar);

// document.write(myCar.listingTitle());