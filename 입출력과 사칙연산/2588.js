// 곱셈
/*
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let a = Number(input[0]);
let b = Number(input[1]);
*/
console.log(a * (b % 10));
console.log(a * Math.floor((b % 100) / 10));
console.log(a * Math.floor(b / 100));
console.log(a * b);
