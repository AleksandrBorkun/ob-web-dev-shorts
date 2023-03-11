const Fight = require("./fight/Fight");
const AbstractPerson = require("./persons/AbstactPerson");
const Monster = require("./persons/Monster");

const promt = require("prompt-sync")();

const WELCOME_TEXT = `Welcome to the fight club!\nRemember! Never Tell about Fight Club!!\nWhat is your name hero?`;

let count = 0;
function main() {
  console.log(WELCOME_TEXT);
  const name = promt();
  const hero = new AbstractPerson(name, 20, 1);

  let monster = new Monster(1);

  const getHP = () =>
    `You have ${hero.hp} HP and ${hero.power} power, and ${monster.name} has ${monster.hp} HP and ${monster.power} power`;

  const getNewMonsterName = () =>
    `Your new opponent ${monster.name}, with ${monster.hp} HP`;
  console.log(
    `${name} welcome to the Fight Club!\nYour first monster is: ${
      monster.name
    }.\n${getHP()}`
  );

  while (hero.isAlive()) {
    if (hero.lv >= 11) {
      console.log(
        `Victory!\nYou killed everyone! And know no one will remember your name!\n You killed ${count} monsters.`
      );
      return;
    }
    console.log("Select defence part:\n1. HEAD\n2. BODY\n3. LEGS");
    const defence = +promt();
    hero.chooseDefence(defence);

    console.log("Select attack point:\n1. HEAD\n2. BODY\n3. LEGS");
    const attack = +promt();
    hero.chooseAttackPart(attack);

    monster.chooseAttackPart(getRandomNumber(3));
    monster.chooseDefence(getRandomNumber(3));

    Fight.attack(hero, monster);

    console.log(getHP());
    if (!monster.isAlive()) {
      count++;
      hero.addExp(monster.initialHP, monster.lv);
      monster = new Monster(getRandomNumber(hero.lv));
      console.log(getNewMonsterName());
    }
  }

  console.log(
    `You lost!\nYour name ${hero.name} will be forgotten forever.\nYou killed ${count} monsters, and you had ${hero.lv} level`
  );
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max + 1);
}

main();
