// 파도반 수열

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => Number(i));

let arr = [1, 1, 1, 2, 2];
input.shift();

let len = arr.length;

for (let i = 0; i < input.length; i++) {
  while (input[i] > len) {
    arr.push(arr[len - 1] + arr[len - 5]);
    len = arr.length;
  }
  console.log(arr[input[i] - 1]);
}
