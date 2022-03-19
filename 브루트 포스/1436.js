// 출력

let input = parseInt(require("fs").readFileSync("/dev/stdin").toString());

let count = 0;
let number = 665;

while (count < input) {
  number++;
  let str = number.toString();

  // if (str.search("666") != -1) {
  if (str.includes(666)) {
    count++;
  }
}

console.log(number);
