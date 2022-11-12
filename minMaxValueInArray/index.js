const arr = [1, 44, 66, 23, 356, 234, 76, 0, -5, 2435, 2];

function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (max < num) {
      max = num;
    }
  }
  return max;
}

function findIndexOfMin(arr) {
  let min = arr[0],
    index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      index = i;
    }
  }
  return index;
}

const minIndex = findIndexOfMin(arr);

console.log(minIndex);
console.log(arr[minIndex]);
