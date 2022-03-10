// 검문

let arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => Number(i));

arr.shift();

let answer = [];

for (let i = 2; i < arr[arr.length - 1]; i++) {
  let cnt = arr.length - 1;
  let ans = arr[0] % i;

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] % i == ans) cnt--;
  }

  if (cnt == 0) answer.push(i);
}

console.log(answer.join(" "));
