function solution(n, clockwise) {
  let answer = Array.from(Array(n), () => Array(n).fill(0));

  let points = [
    [0, 0],
    [0, n - 1],
    [n - 1, n - 1],
    [n - 1, 0],
  ];

  let moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  if (!clockwise) {
    points = [
      [0, 0],
      [n - 1, 0],
      [n - 1, n - 1],
      [0, n - 1],
    ];
    moves = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
  }

  let count = n - 2;

  let value = 2;

  let limit = (Math.floor(n / 2) + 1) * Math.floor(n / 2) + 1;
  if (n % 2 == 0) {
    limit = (n / 2) * (n / 2);
  }

  for (let i = 0; i < 4; i++) {
    answer[points[i][0]][points[i][1]] = 1;
  }

  //while (answer[Math.floor(n / 2)][Math.floor(n / 2)] == 0 || !count) {
  while (count) {
    let currentValue;

    for (let i = 0; i < 4; i++) {
      let x = points[i][0] + moves[i][0];
      let y = points[i][1] + moves[i][1];
      currentValue = value;

      for (let j = 0; j < count; j++) {
        if (currentValue > limit) break;
        answer[x][y] = currentValue++;

        x += moves[i][0];
        y += moves[i][1];
      }
      points[i][0] = x - moves[i][0];
      points[i][1] = y - moves[i][1];
    }

    count--;
    value = currentValue;
    moves.push(moves.shift());
  }

  return answer;
}

console.log(solution(5, 0));
console.log(solution(6, 0));
console.log(solution(7, 0));

let arr = [
  [1, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

function temp(e) {
  if (e.includes(null)) return true;
}

//console.log(arr.filter(temp).length);

/*
3-3
4-4
5-7
6-9
7-13
8-16
9-21
10-25
*/
[
  [1, 6, 5, 4, 3, 2, 1],
  [2, 7, 10, 9, 8, 7, 6],
  [3, 8, 11, 12, 11, 10, 5],
  [4, 9, 12, 0, 12, 9, 4],
  [5, 10, 11, 12, 13, 8, 3],
  [6, 7, 8, 9, 10, 7, 2],
  [1, 2, 3, 4, 5, 6, 1],
];
