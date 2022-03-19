// 최대공약수와 최소공배수

let [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((item) => Number(item));

if (A < B) {
  let temp = A;
  A = B;
  B = temp;
}

function getGCD(A, B) {
  //let tt = B % 2 == 1 ? 2 : 1;
  let answer = Math.ceil(B / 2);
  while (answer) {
    if (A % answer == 0 && B % answer == 0) {
      return answer;
    }
    //answer -= tt;
    answer--;
  }
  return 1;
}

function getLCM(A, B) {
  let answer = A;

  while (1) {
    if (answer % B == 0) return answer;
    answer += A;
  }
}
if (A % B == 0) {
  console.log(B);
  console.log(A);
} else {
  console.log(getGCD(A, B));
  console.log(getLCM(A, B));
}
