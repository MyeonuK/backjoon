// 소트인사이드

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map((item) => parseInt(item));

// solution

console.log(input.sort((a, b) => b - a).join(""));

// insert sort
/*
for (let i = 1; i < input.length; i++) {
  let index = i;

  for (let j = i - 1; j >= 0; j--, index--) {
    if (input[j] < input[index]) {
      let temp = input[index];
      input[index] = input[j];
      input[j] = temp;
    } else {
      break;
    }
  }
}

console.log(input.join(""));
*/

// 병합 정렬
