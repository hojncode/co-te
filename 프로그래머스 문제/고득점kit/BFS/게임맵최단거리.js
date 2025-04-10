const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1]
];

function solution(maps) {
  // n 정의
  const n = maps.length;
  // m 정의
  const m = maps[0].length;

  // 방향 정의 (상하좌우)
  const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  // 행 , 열 , 지금까지 거리 정의 (큐)
  const queue = [[0, 0, 1]];

  // 방문체크 정의 (n*m 배열)
  const visited = Array.from({ length: n }, () => Array(m).fill(false))
  visited[0][0] = true;

  // 탐색
  while (queue.length > 0) {
    // 현재 위치 꺼내기
    const [x, y, dist] = queue.shift();

    // 최종 목표 지점 도달시 거리 반환
    if (x === n - 1 && y === m - 1) {
      return dist;
    }

    // 방향으로 이동 처리
    for (const [dx, dy] of moves) {
      const newX = x + dx;
      const newY = y + dy;

      if (newX >= 0 && newX < n && newY >= 0 && newY < m &&
        maps[newX][newY] === 1 && !visited[newX][newY]
      ) {
        queue.push([newX, newY, dist + 1]);
        visited[newX][newY] = true;
      }
    }
  }

  return -1
}

console.log(solution(maps));