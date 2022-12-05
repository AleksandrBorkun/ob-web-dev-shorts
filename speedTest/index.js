const { performance } = require("perf_hooks");

const arr = new Array(1e7).fill(1).map((_) => Math.random()),
  arr2 = [...arr],
  arr3 = [...arr];
arr4 = [...arr];

checkPerformance(
  () => arr.reduce((prev, curr) => (curr > prev ? curr : prev), arr[0]),
  "reduce"
);

checkPerformance(() => arr2.sort((a, b) => b - a)[0], "sort and take 1st el");

checkPerformance(() => Math.max(...arr3), "MATH max");

checkPerformance(() => {
  let max = arr4[0];
  for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] > max) max = arr4[i];
  }
  return max;
}, "using loop and condition");

function checkPerformance(func = () => {}, operation = "nothing") {
  try {
    let startTime = performance.now();
    let max = func();
    let endTime = performance.now();
    console.log(
      `${operation.toUpperCase()} took ${
        endTime - startTime
      } milliseconds. Max is ${max}. `
    );
  } catch (e) {
    console.error(`${operation} failed`);
  }
}
