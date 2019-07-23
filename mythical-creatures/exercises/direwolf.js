class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (this.home === stark.location && this.starksToProtect.length < 2) {
      this.huntsWhiteWalkers = false;
      this.starksToProtect.push(stark);
      stark.safe = true;
    }
  }

  leave(stark) {
    stark.safe = false;
    this.starksToProtect.pop();
  }
}




module.exports = Direwolf;