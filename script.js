document.addEventListener('DOMContentLoaded', () => {
  const stock = document.querySelector('.stock');
  const waste = document.querySelector('.waste');
  const foundations = document.querySelectorAll('.foundation-pile');
  const tableaus = document.querySelectorAll('.tableau-pile');

  // Função para criar um baralho de cartas
  function createDeck() {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let deck = [];
    suits.forEach(suit => {
      values.forEach(value => {
        deck.push({ suit, value });
      });
    });
    return deck;
  }

  // Função para embaralhar o baralho
  function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }

  // Função para iniciar o jogo
  function startGame() {
    let deck = shuffleDeck(createDeck());
    console.log(deck);

    // Distribuir cartas para as pilhas de tableau
    tableaus.forEach((pile, index) => {
      for (let i = 0; i <= index; i++) {
        const card = deck.pop();
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.suit = card.suit;
        cardElement.dataset.value = card.value;
        cardElement.innerHTML = `${card.value} ${card.suit}`;
        if (i === index) {
          cardElement.classList.add('face-up');
        } else {
          cardElement.classList.add('face-down');
        }
        pile.appendChild(cardElement);
      }
    });

    // Adicionar o restante do baralho ao stock
    deck.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card', 'face-down');
      cardElement.dataset.suit = card.suit;
      cardElement.dataset.value = card.value;
      stock.appendChild(cardElement);
    });
  }

  startGame();
});
