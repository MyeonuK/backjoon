// 골드바흐의 추측

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

function goldbach(num) {
  for (let i = num / 2; i < num; i++) {
    if (isPrime(i) && isPrime(num - i)) {
      return i;
    }
  }

  return -1;
}

let len = parseInt(input.shift());

for (let i = 0; i < len; i++) {
  let number = parseInt(input[i]);
  let result = goldbach(number);

  console.log(`${number - result} ${result}`);
}
