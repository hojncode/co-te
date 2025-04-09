const N = 10;
const X = 5;
const A = [1, 10, 4, 9, 2, 3, 8, 5, 7, 6];

function solution(N,X,A) {
  const arr = [];
  console.log("🚧 arr\n", arr);
  for (let i = 0; i < N; i++) {
    if (A[i] < X) {
      arr.push(A[i])
    }
  }
  return 
}

console.log(solution(N,X,A));