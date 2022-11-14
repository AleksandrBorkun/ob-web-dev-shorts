let count = 0;

const id = setInterval(() => {
  console.log(count++);
}, 1000);

setTimeout(() => clearInterval(id), 5500);
