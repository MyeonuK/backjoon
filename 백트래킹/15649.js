// N과 M (1)

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let N = Number(input[0]);
let M = Number(input[1]);
let checkedArr = new Array(N + 1).fill(false);
let arr = [];

tt(0);

function tt(level) {
  if (level == M) {
    console.log(arr.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!!!checkedArr[i]) {
      checkedArr[i] = true;
      arr[level] = i;
      tt(level + 1);
      checkedArr[i] = false;
    }
  }
}
