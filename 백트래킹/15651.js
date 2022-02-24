// N과 M (3)

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let N = Number(input[0]);
let M = Number(input[1]);
let arr = [];
let answer = "";

tt(0);
console.log(answer.trim());

function tt(level) {
  if (level == M) {
    answer += `${arr.join(" ")}\n`;
    return;
  }

  for (let i = 1; i <= N; i++) {
    arr[level] = i;
    tt(level + 1);
  }
}
