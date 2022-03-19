// 피보나치 수 5

let input = parseInt(require("fs").readFileSync("/dev/stdin").toString());

let fibonacci = [0, 1];

if (input == 0 || input == 1) {
  console.log(input);
} else {
  for (let i = 2; i < input; i++) {
    let number = fibonacci[0] + fibonacci[1];
    fibonacci[0] = fibonacci[1];
    fibonacci[1] = number;
  }

  console.log(fibonacci[0] + fibonacci[1]);
}
