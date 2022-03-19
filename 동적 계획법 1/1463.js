// 1로 만들기

let N = Number(require("fs").readFileSync("/dev/stdin").toString());
/*
while (N > 1) {
  if (N % 3 == 0) N /= 3;
  else if ((N - 1) % 3 == 0) N--;
  else if (N % 2 == 0) N /= 2;
  answer++;
}
*/

let dp = new Array(N + 1).fill(0);

for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + 1;

  if (dp[i] % 2 == 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  if (dp[i] % 3 == 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
}
console.log(dp[N]);
