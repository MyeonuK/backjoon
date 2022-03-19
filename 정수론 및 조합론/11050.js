// 이항 계수 1

let [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((i) => Number(i));

let answer = factorial(N) / (factorial(K) * factorial(N - K));

console.log(answer);

function factorial(a) {
  let result = 1;

  for (let i = 2; i <= a; i++) {
    result *= i;
  }

  return result;
}
