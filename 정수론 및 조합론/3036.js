// 링

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let arr = input[1].split(" ").map((i) => Number(i));

for (let i = 1; i < arr.length; i++) {
  let gcd = GCD(arr[0], arr[i]);
  console.log(`${Math.floor(arr[0] / gcd)}/${Math.floor(arr[i] / gcd)}`);
}

function GCD(a, b) {
  if (a % b == 0) return b;

  return GCD(b, a % b);
}
