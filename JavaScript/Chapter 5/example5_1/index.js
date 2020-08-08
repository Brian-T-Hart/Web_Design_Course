
// Access a single element and store a reference to it in a variable
var contentContainer = document.getElementById('content-container');
// console.log(contentContainer);

var myHeader = document.querySelector('.text-center');
// console.log(myHeader);

// ------------------------------------------------------------------

// Access multiple elements and store them in an Array
var listItems = document.getElementsByTagName('li');
// console.log(listItems);

var listItemsByClass = document.getElementsByClassName('todo-item');
// console.log(listItemsByClass);

var listItemsByQuery = document.querySelectorAll('ol .todo-item');
// console.log(listItemsByQuery);

// -----------------------------------------------------------------
function addToDo() {
    event.preventDefault();
    console.log(event.target.todo.value);
    var newToDo = event.target.todo.value;
    var newListItem = document.createElement('li');
    newListItem.textContent = newToDo;
    var listElement = document.querySelector('ol');
    listElement.appendChild(newListItem);
}
