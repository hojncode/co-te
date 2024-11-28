const N = 8; // 참가자 수
const A = 4; // 참가자 A번호
const B = 7; // 경쟁자 B번호
// answer = 3;

function solution(n , a , b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer += 1;
  }
  return answer;
}

// solution()
console.log("🚧  solution()", solution(N, A ,B));
