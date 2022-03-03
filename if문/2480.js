// 오븐 시계

let [A, B, C] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/[ \n]/)
  .map((item) => Number(item));

let hour = A;
let minute = B + C;

if (minute >= 60) {
  hour += parseInt(minute / 60);
  minute %= 60;

  if (hour >= 24) {
    hour %= 24;
  }
}

console.log(`${hour} ${minute}`);
