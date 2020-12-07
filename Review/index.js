import {questions as q} from './questions.js';
import {Card} from './flashcard.js';


const container = document.getElementById('main-container');
var card = new Card(q);
container.append(card.getCard());