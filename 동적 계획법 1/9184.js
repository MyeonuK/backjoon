// 신나는 함수 실행

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map((j) => Number(j)));

let dp = Array.from(Array(50), () =>
  Array.from(Array(50), () => Array(50).fill(null))
);

input.pop();
input.map((abc) => {
  let [a, b, c] = abc.split(" ");

  console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
});

function w(a, b, c) {
  if (dp[a][b][c] != null) return dp[a][b][c];

  if (a <= 0 || b <= 0 || c <= 0) dp[a][b][c] = 1;
  else if (a > 20 || b > 20 || c > 20) dp[a][b][c] = w(20, 20, 20);
  else if (a < b && b < c)
    dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
  else
    dp[a][b][c] =
      w(a - 1, b, c) +
      w(a, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);

  return dp[a][b][c];
}
