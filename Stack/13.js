// 크레인 인형 뽑기

/*
접근 방식

보드 재배열 → 각 인덱스에 맞는 배열로 재배치

moves 에 각 요소를 보드 배열의 위치와 맞으면 배열을 pop 해서 스택 바구니에 push.

배열 Pop 이 동작하면 카운트 2 더하기
*/

function solution(board, moves) {
  const m_length = moves.length;
  let stack = [];
  let cnt = 0;

  // 재배열
  let newBoard = board[0].map((_, colIndex) => board.map(row => row[colIndex])); // 각 인덱스별 요소 모으기

  // moves[i] = 뽑는 위치 = board 의 위치...
  for (i = 0; i < m_length; i++) {
    const move = moves[i] - 1;
    const lastArg = newBoard[move][newBoard[move].length - 1];
    console.log("⚙️  file: 13.js:25  lastArg", lastArg);
    
    stack.push(lastArg);

    if (stack[i - 1] === lastArg) {
      stack.pop();
      cnt = cnt + 2;
    }

	}
  console.log("stack", stack);
  console.log("⚙️  file: 13.js:32  cnt", cnt)
  
  return cnt;
}

const board = [
	[0, 0, 0, 0, 0],
	[0, 0, 1, 0, 3],
	[0, 2, 5, 0, 1],
	[4, 2, 4, 4, 2],
	[3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
// result = 4;

solution(board, moves)
console.log("⚙️  file: 13.js:34  solution(board, moves)", solution(board, moves))
