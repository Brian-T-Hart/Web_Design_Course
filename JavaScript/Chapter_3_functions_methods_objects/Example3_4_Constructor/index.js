
// Literal Object
var person = {
    firstName: 'Johnny',
    lastName: 'Five',
    age: 23,

    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}


// Constructor Function (used to generate new objects)
function Person(firstName,lastName,age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function(){
        return this.firstName + ' ' + this.lastName;
    }
}

var person1 = new Person('Susan', 'Johnson', 32);
var person2 = new Person('Brian', 'Thomson', 27);

console.log(person1.getFullName());
console.log(person2.getFullName());