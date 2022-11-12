const arr = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

console.log(arr);

const uniq = {};

for (let num of arr) {
  uniq[num] = num;
}

console.log("uniq", Object.values(uniq));
