// 최소공배수

let [T, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map((ii) => Number(ii)));

arr.forEach((AB) => {
  let A = AB[0];
  let B = AB[1];

  if (A < B) {
    let temp = A;
    A = B;
    B = temp;
  }

  let answer = A;

  while (1) {
    if (answer % B == 0) break;
    answer += A;
  }

  console.log(answer);
});
