// 피보나치 함수

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => Number(i));

let arr = [];
arr[0] = [1, 0];
arr[1] = [0, 1];

for (let i = 2; i < 41; i++) {
  arr[i] = [arr[i - 1][0] + arr[i - 2][0], arr[i - 1][1] + arr[i - 2][1]];
}

for (let i = 1; i < input.length; i++) {
  let number = input[i];
  console.log(`${arr[number][0]} ${arr[number][1]}`);
}
