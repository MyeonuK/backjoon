// X보다 작은 수
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let N = input[0].toString().split(" ")[0];
let X = input[0].toString().split(" ")[1];
let A = input[1]
  .toString()
  .split(" ")
  .map((x) => +x);
let answer = "";

for (let i = 0; i < N; i++) {
  if (A[i] < X) {
    answer += `${A[i]} `;
  }
}

console.log(answer);
