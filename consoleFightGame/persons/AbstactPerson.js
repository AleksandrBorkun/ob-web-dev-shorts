class AbstractPerson {
  constructor(name, hp, lvl) {
    this.name = name;
    this.hp = hp;
    this.lv = lvl;
    this.power = 2 * lvl;
    this.exp = 0;
  }

  addExp(initalHP, lvl) {
    this.exp += initalHP * lvl;
    /*  2 - 20 
        3 - 50
        4 - 100
        5 - 120
        6 - 150
        7 - 200
        8 - 250
        9 - 350
        10 - 500
        11 - 1000
    */
    if (this.lv < 2 && this.exp >= 20) {
      this.setLvl(2);
    }
    if (this.lv < 3 && this.exp >= 50) {
      this.setLvl(3);
    }
    if (this.lv < 4 && this.exp >= 100) {
      this.setLvl(4);
    }
    if (this.lv < 5 && this.exp >= 120) {
      this.setLvl(5);
    }
    if (this.lv < 6 && this.exp >= 150) {
      this.setLvl(6);
    }
    if (this.lv < 7 && this.exp >= 200) {
      this.setLvl(7);
    }
    if (this.lv < 8 && this.exp >= 250) {
      this.setLvl(8);
    }
    if (this.lv < 9 && this.exp >= 350) {
      this.setLvl(9);
    }
    if (this.lv < 10 && this.exp >= 500) {
      this.setLvl(10);
    }
    if (this.lv < 11 && this.exp >= 1000) {
      this.setLvl(11);
    }
  }

  isAlive() {
    return this.hp > 0;
  }

  chooseAttackPart(bodyPart) {
    this.attackPoint = bodyPart;
  }

  chooseDefence(bodyPart) {
    this.defencePart = bodyPart;
  }

  setLvl(lv) {
    this.lv = lv;
    this.hp = 20 * this.lv;
    this.power = 2 * this.lv;
  }
}

module.exports = AbstractPerson;
