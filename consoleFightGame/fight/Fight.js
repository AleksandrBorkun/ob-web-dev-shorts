const AbstractPerson = require("../persons/AbstactPerson");
const Monster = require("../persons/Monster");

const BODY_PART = {
  1: "HEAD",
  2: "BODY",
  3: "LEGS",
};

class Fight {
  static attack(hero = new AbstractPerson(), monster = new Monster()) {
    console.log(
      `${hero.name} hit monster in ${BODY_PART[hero.attackPoint]}, ${
        monster.name
      } blocked ${BODY_PART[monster.defencePart]}`
    );

    console.log(
      `${monster.name} hit hero in ${BODY_PART[monster.attackPoint]}, ${
        hero.name
      } blocked ${BODY_PART[hero.defencePart]}`
    );

    if (hero.attackPoint !== monster.defencePart) {
      monster.hp = monster.hp - hero.power * hero.lv;
    }
    if (hero.defencePart !== monster.attackPoint) {
      hero.hp = hero.hp - monster.power * monster.lv;
    }
  }
}

module.exports = Fight;
