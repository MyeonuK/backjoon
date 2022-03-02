// 윤년

let year = Number(require("fs").readFileSync("/dev/stdin").toString());

if (year % 400 == 0) console.log(1);
else if (year % 100 == 0) console.log(0);
else if (year % 4 == 0) console.log(1);
else console.log(0);
