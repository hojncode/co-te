const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
// result = 4;


function solution(board, moves) {
  let result = 0;

  const boardLength = board[0].length;

  const lanes = [...Array(boardLength)].map(() => []);

  for (let i = boardLength - 1; i >= 0; i--) {
    for (let j = 0; j < boardLength; j++) {
      if (board[i][j]) { // 배열에 0이 들어가지 않도록하기 위함. * [3,4,0,0,0] 이 아니라 [3,4] 로 해야 이후 pop이 제대로 동작함.
        lanes[j].push(board[i][j]);
      }
    }
  }
  const bucket = [];


  // 1번 케이스
  for (let k = 0; k < moves.length; k++) {

    if (lanes[moves[k] - 1].length > 0) {
      const doll = lanes[moves[k] - 1].pop();

      if (bucket.length > 0 && bucket[bucket.length - 1] === doll) {
        bucket.pop();
        result = result + 2;
      }

      else bucket.push(doll);

    }
  }

  return result;
}

console.log(solution(board, moves));


  // 2번 케이스 = for...of 문 사용, 가독성 향상
  // for (const m of moves) {
  //   if (lanes[m - 1].length > 0) {
  //     const doll = lanes[m - 1].pop();

  //     if (bucket.length > 0 && bucket[bucket.length - 1] === doll) {
  //       bucket.pop();
  //       result = result + 2;
  //     } else {
  //       bucket.push(doll)
  //     };
  //   }
  // }
