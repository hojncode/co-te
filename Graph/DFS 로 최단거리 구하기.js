function findShortestPathDFS(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  // 방향 벡터: 상, 하, 좌, 우
  const directions = [
    [-1, 0], // 위
    [1, 0],  // 아래
    [0, -1], // 왼쪽
    [0, 1],  // 오른쪽
  ];

  let start = null;
  let end = null;

  // 시작점과 종료점 찾기
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "start") start = [i, j];
      if (grid[i][j] === "end") end = [i, j];
    }
  }

  if (!start || !end) {
    return -1; // 시작점이나 종료점이 없으면 -1 반환
  }

  let shortestDistance = Infinity; // 최단 거리 초기화
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false)); // 방문 여부 기록

  // DFS 함수
  function dfs(x, y, distance) {
    // 종료 조건: end에 도달한 경우
    if (x === end[0] && y === end[1]) {
      shortestDistance = Math.min(shortestDistance, distance);
      return;
    }

    // 현재 노드 방문 처리
    visited[x][y] = true;

    // 네 방향으로 탐색
    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      // 경계 체크 및 유효 경로 확인
      if (
        newX >= 0 &&
        newX < rows &&
        newY >= 0 &&
        newY < cols &&
        grid[newX][newY] !== 0 && // 유효한 경로
        !visited[newX][newY] // 방문하지 않은 경로
      ) {
        dfs(newX, newY, distance + 1);
      }
    }

    // 백트래킹: 방문 상태 초기화
    visited[x][y] = false;
  }

  // DFS 시작
  dfs(start[0], start[1], 0);

  // 최단 거리 반환 (도달할 수 없는 경우 -1 반환)
  return shortestDistance === Infinity ? -1 : shortestDistance;
}

// 테스트 케이스
const grid = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, "end", 1],
  ["start", 0, 1, 1],
];

console.log(findShortestPathDFS(grid)); // 출력: 5
