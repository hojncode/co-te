const n = 3;
const computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];
// 2

// 연결된 노드의 수 답.
// n 개의 방문 확인 배열


function solution(n, computers) {
  let result = 0;
  const visited = Array(n).fill(false);

  function dfs(node) {
    visited[node] = true;

    for (let i = 0; i < n; i++) {
      if (computers[node][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      result++;
    }
  }

  return result;
}

console.log(solution(n, computers));