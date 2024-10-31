const fibo = (idx, memo = {}) => {
  if (idx <= 2) return 1
  if (idx in memo) return memo[idx]
  memo[idx] = fibo(idx - 1, memo) + fibo(idx - 2, memo)
  return memo[idx]
}

const ret = fibo(7)
console.log(ret);


function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2); // 수정된 곳: 재귀로 구현
}

// 예시 출력
console.log(fibonacci(7)); // 10번째 피보나치 수


function fibonacci(n) {
  let a = 0, b = 1, temp;
  for (let i = 1; i < n; i++) {
    temp = a + b;
    a = b;
    b = temp; // 수정된 곳: 반복문으로 구현
  }
  return b;
}

// 예시 출력
console.log(fibonacci(7)); // 10번째 피보나치 수

