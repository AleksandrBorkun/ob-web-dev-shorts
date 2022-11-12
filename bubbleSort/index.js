function createRandomArray(len) {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(Math.floor(Math.random() * 1000));
  }
  console.log("random array is: ", arr);
  return arr;
}

// O(n^2)

function bubbleSort(arr = []) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      const temp = arr[j];
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log("sorted arr", bubbleSort(createRandomArray(10)));
