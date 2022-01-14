// 별 찍기 - 10

let input = parseInt(require("fs").readFileSync("/dev/stdin").toString());

function stars(degree) {
  if (degree == 0) {
    return ["***", "* *", "***"];
  } else {
    let answer = new Array(Math.pow(3, degree)).map(() => new Array());

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let arr = stars(degree - 1);
      }
    }

    return answer;
  }
}
