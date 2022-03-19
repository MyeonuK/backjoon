// 01타일

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => Number(i));

let N = input[0];

let arr = new Array(N + 1).fill(0);
arr[0] = 0;
arr[1] = 1;
arr[2] = 2;

for (let i = 3; i <= N; i++) {
  arr[i] = (arr[i - 1] + arr[i - 2]) % 15746;
}

console.log(arr[N]);
