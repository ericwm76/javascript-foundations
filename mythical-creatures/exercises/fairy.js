class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {
      dresses: ['Iris']
    }
    this.disposition = 'Good natured';
    this.humanWards = [];
    this.counter = 0;
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust = this.dust + 10;
  }

  makeDresses(array) {
    this.clothes.dresses = this.clothes.dresses.concat(array);
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      infant.disposition = 'Malicious';
      this.humanWards.push(infant);
      this.counter++;
    } if (this.counter >= 3) {
      this.disposition = 'Good natured';
      return infant;
    } else {
      return infant;
    }
  }
}


module.exports = Fairy;