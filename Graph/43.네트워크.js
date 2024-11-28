const n = 3;
const computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];
// return 2  

/*
모든 요소를 탐색 = 깊이 우선 탐색

깊이 우선 탐색이 동작한 횟수.

dfs 가 몇번 돌았는지 구할것.

*/


function solution(n, computers) {
  let result = 0;
  const isVisited = Array(n).fill(false); // 방문 여부 (초기 false 세팅)

  function dfs(node) {
    isVisited[node] = true; // 현재 노드 방문 처리
    for (let i = 0; i < n; i++) {
      if (computers[node][i] !== 1) return;

      if (isVisited[i]) return;

      dfs(i);

    }
  }

  for (let i = 0; i < n; i++) {
    if (!isVisited[i]) {
      result++;
      dfs(i);
    }
  }


  return result;
}

console.log(solution(n, computers));

