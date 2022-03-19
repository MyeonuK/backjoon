// 별 찍기 - 10

//let input = parseInt(require("fs").readFileSync("/dev/stdin").toString());

let input = 3;
let answer = stars(2);
let result = [];
console.log(answer);

for (let i = 0; i < answer.length; i++) {
  for (let j = 0; j < answer.length; j++) {
    result.push(answer[i][j]);
  }
  result.push("\n");
}
result.pop();

//console.log(result.join(""));

function stars(degree) {
  let len = Math.pow(3, degree);

  if (degree == 1) {
    return ["***", "* *", "***"];
  } else {
    let answer = Array.from(Array(len), () => Array(len).fill(null));
    //console.log(answer[0]);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let arr;

        if (i == 1 && j == 1) {
          arr = getEmptyArr(degree - 1);
        } else {
          arr = stars(degree - 1);
        }
        //console.log(arr);

        for (let k = 0; k < len / 3; k++) {
          answer[(len / 3) * i + k].splice(k, len / 3, arr[k]);

          //answer[k].push(arr[k]);
        }
      }
    }
    //console.log(answer);
    return answer;
  }
}

function getEmptyArr(degree) {
  let arr = Array.from(Array(Math.pow(3, degree - 1)), () =>
    Array(Math.pow(3, degree)).fill(" ")
  );
  //console.log(arr);
  return arr[0];
}
