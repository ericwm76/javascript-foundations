class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.count = 0;
    this.booty = 0;
  }
  commitHeinousAct() {
    this.count++;
    //Other ways to increment:
    // this.count += 1;
    // this.count = this.count + 1;
    if(this.count >= 3) {
      this.cursed = true;
    }
  }
  robShip() {
    this.booty = 100;
    //return does not have =
    //return must come after this.booty = 100, b/c it ends the function
    return 'YAARRR!';
  }
}


module.exports = Pirate;