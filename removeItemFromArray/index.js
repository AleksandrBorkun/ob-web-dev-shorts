const arr = [1, 2, 3, 4, 5];

const newArray = arr.filter((it) => it != 3);

console.log(newArray);

arr.splice(2, 1);

console.log(arr);
