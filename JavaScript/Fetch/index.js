const todosUrl = 'https://jsonplaceholder.typicode.com/todos';
const usersUrl = 'users.json';

//fetch the todos and add them to the DOM
fetch(todosUrl)
.then(response => response.json())
.then(json => {
    let data = json;
    buildTodos(data);
})

//fetch users and add them to the DOM
fetch(usersUrl)
.then(response => response.json())
.then(json => {
    let data = json;
    buildUsers(data);
})

function buildTodos(data) {
    const todos = data;
    var html = '<h2>Todo List</h2>';
    html += '<ul id="todos">';
    
    for (i = 0; i < 10; i++) {
        html += `<li>${todos[i].title}</li>`;
    }

    html += '</ul>';

    let todosEl = document.getElementById('todos-container');
    todosEl.innerHTML = html;
}

function buildUsers(data) {
    const users = data.users;

    var html = '<table id="users">';
    html += '<tr><th>Username</th><th>Email</th></tr>';
    
    for (i = 0; i < users.length; i++) {
        html += '<tr><td>' + users[i].username + '</td><td>' + users[i].email + '</td></tr>';
        // html += `<tr><td>${users[i].username}</td><td>${users[i].email}</td></tr>`;
    }

    html += '</table>';
    
    let usersEl = document.getElementById('users-container');
    usersEl.innerHTML = html;
}




