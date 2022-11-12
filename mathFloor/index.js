const isZeroTree = (a, b) => {
  const result = Math.floor((a + b) * 100) / 100;
  console.log(result);
  return result === 0.3;
};

console.log(isZeroTree(0.1, 0.2));
