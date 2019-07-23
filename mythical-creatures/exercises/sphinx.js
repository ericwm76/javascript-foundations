class Sphinx {
  constructor () {
    this.riddles = [];
    this.heroesEaten = 0;
    this.correctCount = 0;

  }

  collectRiddle(riddleObj) {
    this.riddles.push(riddleObj);
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }

  attemptAnswer(answer) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (answer === this.riddles[i].answer) {
        this.correctCount++;
        this.riddles.splice(i, 1);
      }
    }
    return this.respondToHero(answer);
  }

    respondToHero(answer) {
    if (this.correctCount === 0) {
      this.heroesEaten = 1;
    } else if (this.correctCount === 2) {
      this.correctCount = 0;
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${answer}\"???`
    } else {
      return 'That wasn\'t that hard, I bet you don\'t get the next one';
    }
  }
}

module.exports = Sphinx;