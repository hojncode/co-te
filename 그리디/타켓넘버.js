const numbers = [1, 1, 1, 1, 1]
const target = 3
// 5


/*
타켓 = 타켓과 동일한 계산 + 0이 되는 계산
0번 부터 다음 숫자들을 더해서 타켓을 만들고 , 나머지 숫자들이 0 이 되는 경우 (0이 되는 경우의 가짓수를 +).


*/
function solution(numbers, target) {
  let result = 0;
  function dfs(index, sum) {
    
    if (index === numbers.length) {
      return sum === target ? result++ : 0;
    }

    const plus = dfs(index + 1,sum + numbers[index]);
    const minus = dfs(index + 1,sum - numbers[index]);
  }

  dfs(0,0)
  return result;
}

console.log(solution(numbers , target));