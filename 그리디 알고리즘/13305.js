// 주유소
//BigInt() 사용 -> 출력은 string으로!

let [N, distanceArr, priceArr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

N = Number(N);
distanceArr = distanceArr.split(" ").map((item) => BigInt(item));
priceArr = priceArr.split(" ").map((item) => BigInt(item));

let answer = BigInt(0);
let price = priceArr[0];

for (let i = 0; i < N - 1; i++) {
  if (price > priceArr[i]) {
    price = priceArr[i];
  }
  answer += distanceArr[i] * price;
}

console.log(answer.toString());
