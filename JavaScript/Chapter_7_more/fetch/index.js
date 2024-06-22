const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

fetch(todosUrl)
.then(function(response) {
    return response.json();
})
.then(function(todos) {
    // console.log(todos);
    buildTodos(todos);
})
.catch(function(err) {
    console.log(err);
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