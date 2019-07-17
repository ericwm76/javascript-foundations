class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined) {
      this.color = "white";
    } else {
          this.color = color;
    // this.color = color || 'white';
    }
  }
  isWhite() {
   if (this.color === "white") {
    return true;
   } else {
    return false;
   }
  }
  says(message) {
    return '**;* ' + message + ' *;**'
  }
}

module.exports = Unicorn;
