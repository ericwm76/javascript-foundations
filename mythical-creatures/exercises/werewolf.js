class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }

  change() {
    this.human = !this.human;
    this.wolf = !this.wolf;
    this.hungry = !this.hungry;
    }

  eat(poorSoul) {
    if (this.hungry === true) {
    poorSoul.alive = false;
    this.change();
    } else {
    return "You crazy human.";
    }
  }
}





module.exports = Werewolf;