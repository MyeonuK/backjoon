// 소수 구하기

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let M = parseInt(input[0]);
let N = parseInt(input[1]);

let isPrime = true;
let result = [];

for (let number = M; number <= N; number++) {
  if (number != 1) {
    isPrime = true;

    for (let testNum = 2; testNum * testNum <= number; testNum++) {
      if (number % testNum == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      result.push(number);
    }
  }
}

console.log(result.join("\n"));
