const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

// check if fetch is available in the browser
if (!('fetch' in window)) {
    console.log('Fetch API not found');
} 
else {
    console.log('You can use fetch');
}

//fetch the todos and add them to the DOM
fetch(todosUrl)
.then(function(response) {
    return response.json();
})
.then(function(json) {
    return buildTodos(json);
})
.catch(function(error) {
    console.log('error in todos catch', error);
})

function buildTodos(data) {
    const todos = data;
    var html = '<h2>Todo List</h2>';
    html += '<ul id="todos">';
    
    for (let i = 0; i < 10; i++) {
        html += `<li>${todos[i].title}</li>`;
    }

    html += '</ul>';

    let todosEl = document.getElementById('todos-container');
    todosEl.innerHTML = html;
}




