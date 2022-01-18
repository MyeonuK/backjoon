// 수 정렬하기

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => parseInt(item));

input.shift();

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length - i - 1; j++) {
    if (input[j] > input[j + 1]) {
      let temp = input[j];
      input[j] = input[j + 1];
      input[j + 1] = temp;
    }
  }
}

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
