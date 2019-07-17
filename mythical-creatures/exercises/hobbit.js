class Hobbit {
  constructor(name) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.isShort = true;
    this.hasRing = true;
    if (this.name === 'Samwise') {
      this.hasRing = false;
    }
  }
  celebrateBirthday() {
    this.age++;
    if (this.age >= 33) {
      this.adult = true;
    }
    if (this.age >= 101) {
      this.old = true;
    }
  } 
}




module.exports = Hobbit;