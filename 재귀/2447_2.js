// 별 찍기 - 10

//let input = parseInt(require("fs").readFileSync("/dev/stdin").toString());

let input = 27;
let result = "";

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    result += drawStar(input, i, j);
  }
  result += "\n";
}
result = result.slice(0, -1);

console.log(result);

function drawStar(degree, x, y) {
  if (x % 3 == 1 && y % 3 == 1) {
    return " ";
  }
  if (degree == 1) {
    return "*";
  }
  return drawStar(degree / 3, Math.floor(x / 3), Math.floor(y / 3));
}
