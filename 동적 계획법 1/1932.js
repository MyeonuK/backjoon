// 정수 삼각형

let triangle = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map((ii) => Number(ii)));

let N = triangle.shift();

for (let i = 1; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    if (j == 0) triangle[i][j] += triangle[i - 1][0];
    else if (j == i) triangle[i][j] += triangle[i - 1][i - 1];
    else
      triangle[i][j] +=
        triangle[i - 1][j - 1] > triangle[i - 1][j]
          ? triangle[i - 1][j - 1]
          : triangle[i - 1][j];
    // Math.max 사용해도 됨
    //else triangle[i][j] += Math.max(triangle[i - 1][j - 1],triangle[i - 1][j])
  }
}
triangle[N - 1].sort((a, b) => b - a);
console.log(triangle[N - 1][0]);
//console.log(Math.max(...triangle[N - 1]));
