// 평균은 넘겠지
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let caseNum = parseInt(input.shift());

for (let i = 0; i < caseNum; i++) {
  let arr = input[i].split(" ").map((x) => +x);
  let studentNum = arr.shift();

  let sum = arr.reduce((sum, curr) => sum + curr, 0);
  let average = sum / studentNum;
  let count = 0;

  for (let j = 0; j < studentNum; j++) {
    if (average < arr[j]) {
      count++;
    }
  }

  let result = ((count / studentNum) * 100).toFixed(3);

  console.log(`${result}%`);
}
