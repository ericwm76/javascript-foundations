class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.crankyCount = 0;
  }

  shoot() {
    this.increaseCrankyCount();
    if (this.cranky === true || this.layingDown === true) {
      return 'NO!';
    } else {
    return 'Twang!!!';
    }
  }

  run() {
    this.increaseCrankyCount();
    if (this.layingDown === true) {
      return 'NO!';
    } else {
    return 'Clop clop clop clop!!!';
    }
  }

  increaseCrankyCount() {
    this.crankyCount++;
    if (this.crankyCount >= 3) {
      this.cranky = true;
    }
  }

  sleep() {
    if (this.layingDown === true) {
      this.cranky = false;
      this.crankyCount = 0;
      return 'ZZZZ';  
    } else {
      return 'NO!';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.standing === true) {
    this.cranky = !this.cranky;
    this.crankyCount =0;
    } else {
      return 'Not while I\'m laying down!'
    }

  }
}

module.exports = Centaur;