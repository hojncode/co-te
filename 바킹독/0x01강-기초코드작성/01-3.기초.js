// const n = 9
// 내 풀이
// function solution(n) {
//   const sqrt = Math.sqrt(n);

//   return Number.isInteger(sqrt) ? 1 : 0;
// }

// console.log(solution(n));

const n = 9
// 답안 풀이
function solution(n) {
  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) return 1;
  }
}

console.log(solution(n));