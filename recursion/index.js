function pow(num, power) {
  let result = 1;

  for (let i = 0; i < power; i++) {
    result = result * num;
  }
  return result;
}

function powRecursive(num, pow) {
  if (pow === 1) return num;
  if (pow === 0) return 1;

  const result = num * powRecursive(num, pow - 1);
  return result;
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21

function fibonachi(step) {
  if (step === 1) return 1;
  if (step <= 0) return 0;
  const result = fibonachi(step - 1) + fibonachi(step - 2);
  return result;
}

console.log(fibonachi(10));
