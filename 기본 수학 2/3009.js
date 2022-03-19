// 네 번째 점

let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((item) => item.split(" "));

let answer = [0, 0];

for (let i = 0; i < 2; i++) {
  if (input[0][i] == input[1][i]) {
    answer[i] = input[2][i];
  } else {
    if (input[0][i] == input[2][i]) {
      answer[i] = input[1][i];
    } else {
      answer[i] = input[0][i];
    }
  }
}

console.log(`${answer[0]} ${answer[1]}`);
