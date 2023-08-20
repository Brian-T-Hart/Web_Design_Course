const usersUrl = 'users.json';

// check if fetch is available in the browser
if (!('fetch' in window)) {
    console.log('Fetch API not found');
} 
else {
    console.log('You can use fetch');
}

//fetch users and add them to the DOM
fetch(usersUrl)
.then(response => response.json())
.then(json => buildUsers(json))
.catch(error => console.log('error in catch', error))

function buildUsers(data) {
    const users = data.users;

    var html = '<h2>Users Table</h2>';
    html += '<table id="users">';
    html += '<tr><th>Username</th><th>Email</th></tr>';
    
    for (let i = 0; i < users.length; i++) {
        html += '<tr><td>' + users[i].username + '</td><td>' + users[i].email + '</td></tr>';
        // html += `<tr><td>${users[i].username}</td><td>${users[i].email}</td></tr>`;
    }

    html += '</table>';
    
    let usersEl = document.getElementById('users-container');
    usersEl.innerHTML = html;
}




