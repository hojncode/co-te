const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: [],
  F: []
}

function dfs(graph, start, visited = new Set()) {
  if (visited.has(start)) return;

  visited.add(start);

  for (const neighbor of graph[start]) {
    dfs(graph, neighbor, visited);
  }
}

dfs(graph, "A");