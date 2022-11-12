function quickSort(arr = []) {
  if (arr.length < 2) return arr;

  let pivot = arr[0];
  let leftArray = [],
    rightArray = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }
  return quickSort(leftArray).concat(pivot, quickSort(rightArray));
}

const arr = [3, 7, 21, 78, 2, 67, 23, 76, 89, 654, 23, 4, 675, 78];

const sorted = quickSort(arr);

console.log(sorted);
