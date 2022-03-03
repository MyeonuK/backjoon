// 배수와 약수

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((i) => Number(i)));

for (let i = 0; i < input.length - 1; i++) {
  let A = input[i][0];
  let B = input[i][1];

  if (A > B) {
    if (A % B == 0) console.log("multiple");
    else console.log("neither");
  } else {
    if (B % A == 0) console.log("factor");
    else console.log("neither");
  }
}
