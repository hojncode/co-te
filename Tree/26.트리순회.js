// 트리 순회
// 전휘 , 중위 , 후위 결과 반환

const nodes = [1, 2, 3, 4, 5, 6, 7];
// return ["1 2 4 5 3 6 7","4 2 5 1 6 3 7", "4 5 2 6 7 3 1"]


function preOrder(nodes, idx) {
  // idx 가 노드 배열의 길이보다 작을 때
  if (idx < nodes.length) {
    // 루트 노드를 출력한 다음, 왼쪽, 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이어붙임.
    let ret = `${nodes[idx]}`;
    ret = ret + preOrder(nodes, idx * 2 + 1);
    ret = ret + preOrder(nodes, idx * 2 + 2);
    return ret;
  }

  // idx >= nodes.length 일 때는 빈 문자열 반환.
  return "";
}

function inOrder(nodes, idx) {
  // idx 가 노드 배열의 길이보다 작을 때
  if (idx < nodes.length) {
    // 왼쪽 서브 트리를 먼저 재귀 호출하여 출력 순서대로 이어붙임.
    let ret = inOrder(nodes, idx * 2 + 1);
    // 루트 노드를 출력한 다음, 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이어붙임.
    ret += `${nodes[idx]}`;
    ret += inOrder(nodes, idx * 2 + 2);
    return ret;
  }

  // idx >= nodes.length 일 때는 빈 문자열 반환.
  return "";
}

function postOrder(nodes, idx) {
  // idx 가 노드 배열의 길이보다 작을 때
  if (idx < nodes.length) {
    // 왼쪽 서브 트리와 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이어붙임.
    let ret = postOrder(nodes, idx * 2 + 1);
    ret += postOrder(nodes, idx * 2 + 2);
    // 루트 노드를 출력함.
    ret += `${nodes[idx]}`;
    return ret;
  }

  // idx >= nodes.length 일 때는 빈 문자열 반환.
  return "";
}


function solution(nodes) {
  return [
    preOrder(nodes, 0).slice(0, -1), // 마지막 공백 제거;
    inOrder(nodes, 0).slice(0, -1),
    postOrder(nodes, 0).slice(0, -1),
  ];
}

// solution()
console.log("🚧  solution()", solution(nodes));

