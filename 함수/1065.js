// 한수

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let X = parseInt(input[0]);
let count = 0;

for (let i = 1; i <= X; i++) {
  if (isHan(i)) {
    count++;
  }
}

console.log(count);

function isHan(number) {
  let num = number.toString();
  let len = num.length;

  if (len == 1) {
    return 1;
  }

  let temp = num[0] - num[1];
  for (let i = 1; i < len - 1; i++) {
    if (num[i] - num[i + 1] != temp) {
      return 0;
    }
  }
  return 1;
}
