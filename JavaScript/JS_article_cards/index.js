console.log('js loaded');

const cardsContainer = document.getElementById('cards');

console.log(getCardAsString(articles[0]));

console.log(getCardAsElement(articles[0]));

for (let i = 0; i < articles.length; i++) { 
    let card = getCardAsString(articles[i]);
    cardsContainer.innerHTML += card;
}

// for (let i = 0; i < articles.length; i++) { 
//     let card = getCardAsElement(articles[i]);
//     cardsContainer.appendChild(card);
// }

function getCardAsString(article) {
    return `
        <div class="card mr-3">
            <div class="card-body">
                <img class="card-img-top" src="https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                <h2 class="card-title">${article.title}</h2>
                <p class="card-text">${article.text}</p>
                <a href="#">read more</a>
            </div>
        </div>
    `; 
}

function getCardAsElement(article) {
    const card = document.createElement('div');
    card.className = 'card mr-3';
    card.innerHTML = `
        <div class="card-body">
            <h2 class="card-title">${article.title}</h2>
            <p class="card-text">${article.text}</p>
        </div>
    `;

    return card;
}

