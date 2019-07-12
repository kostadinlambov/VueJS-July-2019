new Vue({
  el: '#app',
  data: {
    counter: 60,
    hasFlippedCard: false,
    lockBoard: false,
    firstCard: null,
    secondCard: null,
    counterInterval: null,
    disabledCards: 0,
    cards: [
      { type: 'Aurelia', imageUrl: 'img/aurelia.svg', classList: ['memory-card'] },
      { type: 'Aurelia', imageUrl: 'img/aurelia.svg', classList: ['memory-card'] },
      { type: 'Vue', imageUrl: 'img/vue.svg', classList: ['memory-card'] },
      { type: 'Vue', imageUrl: 'img/vue.svg', classList: ['memory-card'] },
      { type: 'Angular', imageUrl: 'img/angular.svg', classList: ['memory-card'] },
      { type: 'Angular', imageUrl: 'img/angular.svg', classList: ['memory-card'] },
      { type: 'Ember', imageUrl: 'img/ember.svg', classList: ['memory-card'] },
      { type: 'Ember', imageUrl: 'img/ember.svg', classList: ['memory-card'] },
      { type: 'Backbone', imageUrl: 'img/backbone.svg', classList: ['memory-card'] },
      { type: 'Backbone', imageUrl: 'img/backbone.svg', classList: ['memory-card'] },
      { type: 'React', imageUrl: 'img/react.svg', classList: ['memory-card'] },
      { type: 'React', imageUrl: 'img/react.svg', classList: ['memory-card'] }
    ]
  },
  watch: {
    counter(newValue) {
      if (newValue === 0) {
        let newGame = confirm('Time is up! New game ?');

        if (newGame) {
          location.reload();
        }
      }
    }
  },
  methods: {
    flipCard(index) {
      let currentCard = this.cards[index];

      if (this.lockBoard) {
        return;
      }

      // Don't flip the same card
      if (currentCard === this.firstCard) {
        return;
      }

      currentCard.classList.push('flip');

      if (!this.hasFlippedCard) {
        this.hasFlippedCard = true;
        this.firstCard = currentCard;
      } else {
        this.secondCard = currentCard;
        this.checkForMatch();
      }
    },
    checkForMatch() {
      let isMatch = this.firstCard.type === this.secondCard.type;

      isMatch ? this.disableCards() : this.unflipCards();
    },
    disableCards() {
      this.lockBoard = true;

      setTimeout(() => {
        this.firstCard.classList.push('disable-card');
        this.secondCard.classList.push('disable-card');
        this.disabledCards += 2;
        this.checkGameOver();
        this.resetBoard();
      }, 1000);
    },
    unflipCards() {
      this.lockBoard = true;

      setTimeout(() => {
        this.firstCard.classList.splice(1, 1);
        this.secondCard.classList.splice(1, 1);

        this.resetBoard();
      }, 1000)
    },
    resetBoard() {
      [this.hasFlippedCard, this.lockBoard] = [false, false];
      [this.firstCard, this.secondCard] = [null, null];
    },
    checkGameOver() {
      if (this.disabledCards === 12) {
        let newGame = confirm('Game is over! Start a new one?');

        if (newGame) {
          document.location.reload();
        }
      }
    }
  },
  created() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }

    this.counterInterval = setInterval(() => {
      this.counter--;
    }, 1000)
  }
});