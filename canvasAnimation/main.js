const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");

let index = 0,
  speed = 0;

const sprites = [];
for (let i = 0; i < 11; i++) {
  const image = new Image();
  image.src = `sprites/${i}.png`;
  sprites.push(image);
}

sprites[10].onload = animate();

function animate() {
  speed++;
  if (speed % 5 !== 0) return window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(sprites[index % sprites.length], 0, 0);
  index++;

  window.requestAnimationFrame(animate);
}
