var groceries = ['milk', 'apples', 'cereal', 'butter', 'cheese'];
var mainContainer = document.getElementById('main-container');
var groceryForm = document.getElementById('grocery-form');
var newGrocery = document.getElementById('grocery-input');

for (i = 0; i < groceries.length; i++) {
    var el = document.createElement('p');
    el.textContent = groceries[i];
    el.className = 'red';
    el.addEventListener('click', changeStatus);
    mainContainer.appendChild(el);
}

function changeStatus(e) {
    e.target.className == 'blue' ? e.target.className = 'red' : e.target.className = 'blue';
}

newGrocery.addEventListener('focus', function() {
    newGrocery.style.border = '3px solid lightblue';
});

newGrocery.addEventListener('blur', function() {
    newGrocery.style.border = '2px solid #ccc';
});

groceryForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var el = document.createElement('p');
    el.textContent = e.target.grocery.value;
    el.className = 'red';
    el.addEventListener('click', changeStatus);
    mainContainer.appendChild(el);
    newGrocery.value = "";
});

window.addEventListener('keyup', function(e) {
    console.log(e.key);
})



