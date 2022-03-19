// 잃어버린 괄호

let input = require("fs").readFileSync("/dev/stdin").toString().trim();

//let input = "55-50+40";
let numbers = input.split(/[+-]/).map((item) => Number(item));
let pluses = input
  .split(/["1234567890"]/)
  .join("")
  .split("");
pluses.unshift("+");

let answer = 0;
let i = 0;
for (; i < numbers.length; i++) {
  if (pluses[i] == "-") break;

  answer += numbers[i];
}

for (; i < numbers.length; i++) {
  answer -= numbers[i];
}

console.log(answer);
