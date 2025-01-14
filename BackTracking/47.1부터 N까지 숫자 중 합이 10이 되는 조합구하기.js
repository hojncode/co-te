// const N = 5;

function solution(N) {
  const results = []; // ➊ 조합 결과를 담을 리스트

  function backtrack(sum, selectedNums, start) {
    console.log("🚧  sum, selectedNums, start\n", sum, selectedNums, start);
    if (sum === 10) { // ❷ 합이 10이 되면 결과 리스트에 
      console.log("🚧  여기서 푸시\n", selectedNums);
      
      results.push(selectedNums);
      return;
    }

    for (let i = start; i <= N; i++) { // ❸ 다음에 선택할 수 있는 숫자들을 하나씩 선택하면서
      if (sum + i <= 10) { // ❹ 선택한 숫자의 합이 10보다 작거나 같으면
        backtrack(
          sum + i, selectedNums.concat(i), i + 1
        ); // ❺ 백트래킹 함수를 재귀적으로 호출합니다.
      }
    }
  }

  backtrack(0, [], 1); // ❻ 백트래킹 함수 호출
  return results; // ❼ 조합 결과 반환
}

console.log(solution(5)) // [[1, 2, 3, 4], [1, 4, 5], [2, 3, 5]]
console.log(solution(2)) // []
console.log(solution(7)) // [[1, 2, 3, 4], [1, 2, 7], [1, 3, 6], [1, 4, 5], [2, 3, 5], [3, 7], [4, 6]]