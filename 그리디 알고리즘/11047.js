// 동전 0

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let K = Number(input.shift().split(" ")[1]);
input = input.map((e) => parseInt(e));

let answer = 0;

// findIndex -> 조건이 안맞으면 -1 리턴한다
/* 느림
let i = input.findIndex((e) => e > K);
i = i == -1 ? input.length - 1 : i;
*/
for (let i = input.length - 1; i >= 0; i--) {
  if (K == 0) break;

  while (input[i] <= K) {
    K -= input[i];
    answer++;
  }
}

console.log(answer);
