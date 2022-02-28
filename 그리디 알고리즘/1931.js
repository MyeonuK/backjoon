// 회의실 배정

let [N, ...I] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

//let input = "11\n12 14\n3 5\n0 6\n5 7\n3 8\n5 9\n6 10\n8 11\n8 12\n2 13\n1 4";
//let [N, ...I] = input.trim().split("\n");
let answer = 0;

N = Number(N);
I = I.map((e) => e.split(" ").map((ee) => Number(ee)));

I.sort((a, b) => {
  if (a[1] == b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});
//console.log(I);

let temp = 0;

let tempEnd = 0;
for (let i = 0; i < N; i++) {
  if (I[i][0] >= tempEnd) {
    tempEnd = I[i][1];

    //console.log(`${I[i][0]}    ${I[i][1]}`);
    answer++;
  }
}

console.log(answer);

// 회의실 배정

let [N, ...I] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

//let input = "11\n12 14\n3 5\n0 6\n5 7\n3 8\n5 9\n6 10\n8 11\n8 12\n2 13\n1 4";
//let [N, ...I] = input.trim().split("\n");
let answer = 1;

N = Number(N);
I = I.map((e) => e.split(" ").map((ee) => Number(ee)));

I.sort((a, b) => {
  if (a[1] == b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});
//console.log(I);

let temp = 0;

for (let i = 1; i < N; i++) {
  if (I[i][0] > I[temp][1]) {
    temp = i;

    //console.log(`${I[i][0]}    ${I[i][1]}`);
    answer++;
  }
}

console.log(answer);
