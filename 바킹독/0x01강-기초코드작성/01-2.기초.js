const n = 3;
const arr = [1, 52, 48];

function solution(arr, n) {
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] + arr[j] === 100) {
        return result = 1
      }
    }

  }

  return result;
}

console.log(solution(arr, n));