const amount = 123
// return  [100, 10, 10, 1, 1, 1];

// 최소한의 화페를 사용해서 계산
const money = [1, 10, 50, 100];

function solution(amount) {
  const length = money.length;

  const arr = [];

  // 나머지 구하기
  let newAmount = amount;
  for (let i = length - 1; i >= 0; i--) {
    if (newAmount >= money[i]) {
      const x = Math.floor(newAmount / money[i]);
      newAmount = newAmount - (money[i] * x)

      for (let j = 1; j <= 2; j++) {
        arr.push(money[i]);
      }

    }

  }

  console.log("🚧  arr\n", arr);

  return arr;
}

console.log(solution(amount));
