// 사칙연산

let [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((item) => Number(item));

console.log(`${A + B}
${A - B}
${A * B}
${parseInt(A / B)}
${A % B}`);
