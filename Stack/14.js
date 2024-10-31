// 표 편집

/**
 * 
 * @param {number} n 
 * @param {number} k 
 * @param {Array.<string>} cmd 
 * @returns {string}
 */
function solution(n, k, cmd) {
  /*
  명령어 정의
  D 아래 행 선택
  U 위  행 선택
  C 현재 행 삭제 & 아래 행 선택
  Z 복구 (가장 최근 삭제한 행) * 현재 선택한 행은 바뀌지 않음.
  */

  let result;

  let stack = [...new Array(n)].map((_, i) => [i - 1 + 1, "O"]);
  let x_stack = [];
  let pointer = stack[k][0];

  for (i = 0; i < cmd.length; i++) {
    const key = cmd[i].replace(/\s+/g, '');
    if (stack[pointer][1] === "X") pointer += 1;
    
    if (key[0] === "D") {
      pointer = pointer + +key[1]
    }
    else if (key[0] === "U") {
      pointer = pointer - +key[1]
      if (stack[pointer][1] === "X") pointer -= 1;
    }
    else if (key[0] === "C") {
      stack[pointer][1] = "X"
      x_stack.push(stack[pointer])
      if (pointer === n - 1) pointer -= 1;
      else if (stack[pointer][1] === "X") pointer += 1;
    }
    else if (key[0] === "Z") {
      const update = x_stack.length > 0 && x_stack.pop();
      stack[update[0]][1] = "O"
    }

    result = stack.map((v, i) => v[1]).flat().join('');
  };
  return result;
}


//입출력 케이스1
// const n = 8; // 처음 표의 행의 개수
// const k = 2; // 처음에 선택한 행의 위치
// const cmd = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"]; // 수행한 명령
// result = "OOOOXOOO"

//입출력 케이스2
const n = 8; // 처음 표의 행의 개수
const k = 2; // 처음에 선택한 행의 위치
const cmd = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"] // 수행한 명령
// result = "OOXOXOOO"


solution(n, k, cmd);
console.log("⚙️  file: 14.js:69  solution(n, k, cmd);", solution(n, k, cmd))
