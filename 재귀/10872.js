// 팩토리얼

let input = parseInt(require("fs").readFileSync("/dev/stdin").toString());

let answer = 1;

for (let i = 1; i <= input; i++) {
  answer *= i;
}

console.log(answer);
