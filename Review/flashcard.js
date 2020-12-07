function Card(data) {
    this.data = data,
    this.num = localStorage.getItem('currentCard') || 0,

    this.getNext = () => {
        if (this.num === data.length - 1) {
            this.num = 0;
        } else {
            this.num++;
        }

        localStorage.setItem('currentCard', this.num);
        let el = document.getElementById('main-container');
        el.innerHTML = '';
        el.appendChild(this.getCard());
    },

    this.getPrevious = () => {
        if (this.num === 0) {
            this.num = data.length - 1;
        } else {
            this.num--;
        }
        console.log('clicked Previous', this.num);
        localStorage.setItem('currentCard', this.num);
        let el = document.getElementById('main-container');
        el.innerHTML = '';
        el.appendChild(this.getCard());
    },

    this.flip = () => {
        let el = document.querySelector('.flip-container');
        if (el.classList.contains('rotate')) {
            el.classList.remove('rotate');
        } else {
            el.classList.add('rotate');
        }
    },

    this.getCardFront = () => {
        let card = document.createElement('div');
        card.className = 'card front';
        card.addEventListener('click', this.flip);

        let cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';
        cardHeader.textContent = this.data[this.num].category;

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let cardText = document.createElement('p');
        cardText.className = "card-text";
        cardText.textContent = this.data[this.num].question;

        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        cardBody.appendChild(cardText);

        return card;
    },

    this.getCardBack = () => {
        let card = document.createElement('div');
        card.className = 'card back';
        card.addEventListener('click', this.flip);

        let cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';
        cardHeader.textContent = this.data[this.num].category;

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let cardText = document.createElement('p');
        cardText.className = "card-text";
        cardText.textContent = this.data[this.num].answer;

        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        cardBody.appendChild(cardText);

        return card;
    },

    this.getCard = () => {
        let containerEl = document.createElement('div');
        containerEl.className = 'card-container';

        let prevBtn = document.createElement('div');
        prevBtn.id = 'prev-btn';
        prevBtn.textContent = 'Back';
        prevBtn.addEventListener('click', this.getPrevious);

        let flipWrapper = document.createElement('div');
        flipWrapper.className = 'flip-wrapper';

        let flipContainer = document.createElement('div');
        flipContainer.className = 'flip-container';

        let cardFront = this.getCardFront();
        let cardBack = this.getCardBack();

        flipContainer.appendChild(cardFront);
        flipContainer.appendChild(cardBack);
        flipWrapper.appendChild(flipContainer);

        let nextBtn = document.createElement('div');
        nextBtn.id = 'next-btn';
        nextBtn.textContent = 'Next';
        nextBtn.addEventListener('click', this.getNext);

        containerEl.appendChild(prevBtn);
        containerEl.appendChild(flipWrapper);
        containerEl.appendChild(nextBtn);

        return containerEl;
    }
}

export {Card};