const red = "\x1b[31m",
  green = "\x1b[32m",
  yellow = "\x1b[33m",
  blue = "\x1b[34m";

printRed("Hello I'm Red");
console.log(green, "Hello I'm Green");
console.log(yellow, "Hello I'm Yellow");
console.log(blue, "Hello I'm Blue");

function printRed(str) {
  console.log(red, str);
}
