


const adj = Array.from({ length: 3 }, () => Array.from({ length: 3 }, (_, i) => 0))

const visited = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => false));

const directions = [
  [-1, 0], [1, 0], [0, -1], [0, 1]
]

const dfs = (row) => {
  if (row < 0 || row >= adj.length) return;

  const dfsRecursive = (r, c) => {
    if (r < 0 || r >= adj.length ||
      c < 0 || c >= adj[0].length ||
      visited[r][c]) return;

    visited[r][c] = true;
    console.log(`방문: [${r}, ${c}] = ${adj[r][c]}`);

    for (const [dr, dc] of directions) {
      const newRow = r + dr;
      const newCol = c + dc;
      dfsRecursive(newRow, newCol);
    }

    dfsRecursive(row, 0);
  }


  dfsRecursive(row, 0);
};

dfs(0);

console.log("🚧 adj\n", adj);
console.log("🚧 visited\n", visited);
