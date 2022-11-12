const prompt = require("prompt-sync")();

const cards = [
  {
    id: 1234,
    balance: 1000,
    password: 0990,
  },
  {
    id: 1235,
    balance: 1000000,
    password: 0070,
  },
];

function openATM() {
  const welcome = `
    Choose Operation:
        1 - Put Card
        2 - Exit
    `;
  const name = prompt(welcome);
  if (name.trim() === "2") {
    console.log("Good Buy!");
    return;
  } else {
    throw "No Operation Found";
  }
}

openATM();
