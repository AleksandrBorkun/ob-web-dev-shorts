let result = 0;
for (let i = 0; i < 10; i++) {
  let innerResult = 0;
  innerResult = innerResult + i;
  result = result + i;
  let random = logic(i);
  console.log(random);
  console.log(result, innerResult);
}

function logic(i) {
  return i * Math.floor(Math.random() * 10);
}
