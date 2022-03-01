// ATM

let [N, P, ...etc] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

N = Number(N);
P = P.split(" ").map((item) => Number(item));
P.sort((a, b) => {
  return b - a;
});

let answer = 0;

for (let i = 0; i < N; i++) {
  answer += (i + 1) * P[i];
}

console.log(answer);
