function solution(board, moves) {
	const m_length = moves.length;
	let stack = [];
	let cnt = 0;

	// 재배열
	let newBoard = board[0].map((_, colIndex) => board.map((row) => row[colIndex])); // 각 인덱스별 요소 모으기

	for (i = 0; i < m_length; i++) {
		const move = moves[i] - 1;

		for (j = newBoard[move].length - 1; j >= 0; j--) {
			if (newBoard[move][j] !== 0) {
				const picked = newBoard[move][j];

				if (stack.length > 0 && stack[stack.length - 1] === picked) {
					stack.pop();
					cnt += 2;
				} else {
					stack.push(picked);
				}
				break;
			}
		}
	}

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

solution(board, moves);
console.log("⚙️  file: 13.js:34  solution(board, moves)", solution(board, moves));
