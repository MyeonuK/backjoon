// 약수

let [number, arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

number = Number(number);
arr = arr.split(" ").map((item) => Number(item));
arr.sort((a, b) => a - b);

let answer = 0;

if (number % 2 == 1) {
  answer = arr[(number - 1) / 2] * arr[(number - 1) / 2];
} else {
  answer = arr[0] * arr[number - 1];
}

console.log(answer);
