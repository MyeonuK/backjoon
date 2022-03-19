// 팩토리얼

let input = parseInt(require("fs").readFileSync("/dev/stdin").toString());

let answer = 1;

for (let i = 1; i <= input; i++) {
  answer *= i;
}

function aaa(num) {
  if (num == 1) {
    return 1;
  } else {
    return num * aaa(num - 1);
  }
}

console.log(answer);
