// 덩치

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
input.shift();

let arr = input.map((item) => item.split(" ").map((i) => parseInt(i)));
let result = "";

for (let i = 0; i < arr.length; i++) {
  let count = 1;

  for (let j = 0; j < arr.length; j++) {
    if (i == j) continue;

    if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
      count++;
    }
  }

  result += `${count} `;
}

result = result.slice(0, -2);

console.log(result);
