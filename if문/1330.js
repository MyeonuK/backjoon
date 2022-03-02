// 두 수 비교하기

let [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((item) => Number(item));

if (A > B) console.log(">");
else if (A < B) console.log("<");
else console.log("==");
