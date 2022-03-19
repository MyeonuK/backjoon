// 더하기 사이클
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let N = parseInt(input[0]);
let newN = N;
let count = 0;

while (true) {
  if (newN < 10) {
    newN += newN * 10;
  } else {
    let sum = Math.floor(newN / 10) + (newN % 10);
    newN = (newN % 10) * 10 + (sum % 10);
  }
  count++;

  if (N == newN) {
    break;
  }
}

console.log(count);
