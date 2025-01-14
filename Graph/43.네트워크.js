const n = 3;
const computers = [[1, 1, 0], [1, 1, 1], [0, 1, 1]];

/*
모든 요소를 탐색 = 깊이 우선 탐색

깊이 우선 탐색이 동작한 횟수.

dfs 가 몇번 돌았는지 구할것.

*/

function dfs(computers, visited, node) {
  visited[node] = true;
  
  for (let i = 0; i < computers[node].length; i++) {
    if (computers[node][i] !== 0 && !visited[i]) {
      dfs(computers, visited, i)
    }
  }

}

function solution(n, computers) {
  let answer = 0;

  const visited = Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(computers, visited, i);
      answer++;
    }
  }


  return answer;
}

console.log(solution(n, computers));
