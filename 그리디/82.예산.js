//케이스 1
// const d = [1, 3, 2, 5, 4];
// const budget = 9;
// result = 3

// 케이스 2
const d = [2, 2, 3, 3];
const budget = 10;
// result = 4


// 권장 시간 40분
// 실제 풀이 20분

// 가장 낮은 예산 부터 처리하기
function solution(d, budget) {
  let result = budget;

  // 낮은 순서대로 정렬
  const sort = d.sort((a, b) => a - b)

  let count = 0;

  for (let i = 0; i < d.length; i++) {
    if (result - sort[i] >= 0) {
      result = result - sort[i]
      count++;
    }
  }

  // 예산보다 초과하면 이전값에서 종료.


  return count;
}

console.log(solution(d, budget));