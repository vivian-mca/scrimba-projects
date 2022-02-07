let player = {
  name: 'Danny Devito',
  chips: 10,
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardEl = document.getElementById('cards-el');
let playerEl = document.getElementById('player-el');

playerEl.textContent = player.name + ': $' + player.chips;

function getRandomCard() {
  let randomNum1To13 = Math.floor(Math.random() * 13) + 1;
  if (randomNum1To13 === 1) {
    return 11;
  } else if (randomNum1To13 >= 11) {
    return 10;
  } else {
    return randomNum1To13;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = 'Cards: ';
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + ' ';
  }

  sumEl.textContent = 'Sum: ' + sum;

  if (sum <= 20) {
    message = 'Do you want to draw a new card?';
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  } 
}