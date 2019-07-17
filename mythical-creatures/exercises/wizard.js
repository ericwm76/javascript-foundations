class Wizard {
  constructor(obj) {
    this.name = obj.name;
    this.bearded = obj.bearded;
    this.bearded = this.bearded === undefined;
    // This is another way of writing the conditional
    // if (this.bearded === undefined) {
    //   this.bearded = true;
    // }
    this.isRested = true;
    this.spellCount = 0;
  }
  incantation(rootPowers) {
    return rootPowers.toUpperCase();
  }
  cast() {
    this.spellCount++;
    if (this.spellCount >= 3) {
      this.isRested = false;
      return 'I SHALL NOT CAST!';
    } 
      return 'MAGIC BULLET';
  }
}  




module.exports = Wizard;