const prompt = require("prompt-sync")();

console.log(
  "Plese think of a number from 1 to 1024 and type 'start'.\n Otherwise program will exit."
);

const isStart = prompt().toLocaleLowerCase() === "start";

let min = 0,
  max = 1024,
  count = 0,
  result = undefined;

if (isStart) {
  while (true) {
    const average = max - (max - min) / 2;

    console.log({ min, max, average });

    if (max - min === 2) {
      console.log(`Is your number is ${max}.\n1. true\n2. false`);
      const finalAnswer = prompt();
      if (finalAnswer === "1") {
        result = max;
      } else if (finalAnswer === "2") {
        result = average;
      } else {
        console.log("You can only use 1 or 2 for the answer");
        count--;
      }
      count++;
      break;
    }

    console.log(`Is your number is bigger than ${average}.\n1. true\n2. false`);
    const answer = prompt();
    if (answer === "1") {
      min = average;
    } else if (answer === "2") {
      max = average;
    } else {
      console.log("You can only use 1 or 2 for the answer");
      count--;
    }
    count++;
  }
} else {
  console.log("Game over.");
}

if (result) {
  console.log(
    `Haha, your number is ${result}, I guessed it in ${count} number of tries `
  );
}
