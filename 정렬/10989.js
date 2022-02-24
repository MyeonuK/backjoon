// 수 정렬하기 3

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((item) => +item);
input.shift();

let arr = new Array(10001).fill(0);

for (number of input) {
  arr[number]++;
}

for (index in arr) {
  for (let i = 0; i < arr[index]; i++) {
    console.log(index);
  }
}
