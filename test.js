console.log(solution(4578, [1, 4, 99, 35, 50, 1000]));

function solution(money, costs) {
  let answer = 0;
  let check = [1, 0, 0, 0, 0, 0];
  let won = [1, 5, 10, 50, 100, 500];
  let index = 0;

  for (let i = 1; i < 6; i++) {
    let temp = won[i] / won[index];
    if (costs[index] * temp > costs[i]) {
      check[i] = 1;
      index = i;
    }
  }
  console.log(check);

  for (let i = 5; i >= 0; i--) {
    if (check[i]) {
      answer += Math.floor(money / won[i]) * costs[i];
      money = money % won[i];
    }
  }

  return answer;
}
