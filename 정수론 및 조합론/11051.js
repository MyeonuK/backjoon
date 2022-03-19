// 이항 계수 2

let [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((i) => Number(i));

let answer = tt(N, K);

let dp = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));

dp[0][0] = 1;
dp[1][0] = 1;
dp[1][1] = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    if (j == 0) {
      dp[i][j] = 1;
    }
  }
}

console.log(answer % 10007);

/*
10000
11000
12100
13310
14641








*/
