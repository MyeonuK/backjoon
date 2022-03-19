// 블랙잭

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let M = parseInt(input[0].split(" ")[1]);
let cards = input[1].split(" ").map((item) => +item);

let minGap = M;
let answer = 0;

for (let i = 0; i < cards.length - 2; i++) {
  // for (let j = 0; j < cards.length - 1; j++) {
  for (let j = i + 1; j < cards.length - 1; j++) {
    //for (let k = 0; k < cards.length; k++) {
    for (let k = j + 1; k < cards.length; k++) {
      let value = cards[i] + cards[j] + cards[k];
      let gap = M - value;

      // if (0 < gap && gap < minGap) {
      if (0 <= gap && gap < minGap) {
        minGap = gap;
        answer = value;
      }
    }
  }
}

console.log(answer);
