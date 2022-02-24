// 동전 0

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let K = Number(input.shift().split(" ")[1]);
input = input.map((coin) => Number(coin));
/*
let K = 4790;
let input = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000];
*/

let answer = 0;

let i = input.findIndex((e) => {
  if (e > K) return true;
});

for (; i >= 0; i--) {
  while (input[i] <= K) {
    K -= input[i];
    answer++;
  }

  if (K == 0) break;
}

console.log(answer);
