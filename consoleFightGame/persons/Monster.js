const AbstractPerson = require("./AbstactPerson");

class Monster extends AbstractPerson {
  constructor(lvl) {
    switch (lvl) {
      case 1:
      case 2:
        super("Skeleton", 10, 1);
        break;
      case 3:
        super("Ork", 30, 3);
        break;
      case 4:
      case 5:
        super("Wolf", 50, 4);
        break;
      case 6:
        super("Assassin", 60, 7);
        break;
      case 7:
        super("Ninja", 100, 8);
        break;
      case 8:
      case 9:
        super("Titan", 150, 8);
        break;
      case 10:
      case 11:
        super("Dragon", 200, 10);
        break;
    }
    this.initialHP = this.hp;
  }
}

module.exports = Monster;
