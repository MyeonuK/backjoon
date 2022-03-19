// 소수

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let M = parseInt(input[0]);
let N = parseInt(input[1]);

let sum = 0;
let min = 0;

for (let i = N; i >= M; i--) {
  if (isPrime(i)) {
    sum += i;
    min = i;
  }
}

if (sum > 0) {
  console.log(sum);
  console.log(min);
} else {
  console.log(-1);
}

function isPrime(number) {
  if (number == 1) {
    return 0;
  }
  for (let i = 2; i * i <= number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }

  return 1;
}
