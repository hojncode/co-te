const n = 9;
const wires = [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]];

/*
  1. 모든 노드는 하나의 트리로 연결되어 있다.
  2. DFS 를 사용 = 최적이나 최소를 구하는 것이 아니기 때문.
  3. 전체 전력망에서 전선을 하나씩 제거 -> 두 전력망의 갯수 차이를 구함( 최솟값 반환 )

*/

function solution(n, wires) {
  let result;
  // 그래프 생성

  const graph = Array.from({ length: n + 1 }, () => []);
  console.log("🚧  graph1\n", graph);
  
  for (const [a, b] of wires) {
    console.log("🚧  a, b\n", a, b);
    
    graph[a].push(b);
    graph[b].push(a);
  }
  
  console.log("🚧  graph2\n", graph);

  function dfs(node, parent) {
    
  }
  return result;
}

console.log(solution(n, wires));