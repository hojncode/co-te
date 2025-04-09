// const n = 16
// const n = 34567
const n = 27639

function solution(n) {
  let result = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i
    }
  }
  

  return result;
}

console.log(solution(n));