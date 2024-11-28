// // 1
// const fibonacci = (idx, memo = {}) => {
//   if (idx <= 2) return 1
//   if (idx in memo) return memo[idx]
//   memo[idx] = fibonacci(idx - 1, memo) + fibonacci(idx - 2, memo)
//   return memo[idx]
// }

// const result = fibonacci(7)
// console.log(result);

// // 2
// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2); // 수정된 곳: 재귀로 구현
// }

// console.log(fibonacci(7)); // 10번째 피보나치 수

// // 3
// function fibonacci(n) {
//   let a = 0, b = 1, temp;
//   for (let i = 1; i < n; i++) {
//     temp = a + b;
//     a = b;
//     b = temp; // 수정된 곳: 반복문으로 구현
//   }
//   return b;
// }

// console.log(fibonacci(7)); // 10번째 피보나치 수

// 4 캐싱 (메모이제이션)
function memoize(fn) {
  const cache = new Map();

  function memoizedFunc(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);

    return result;
  }

  memoizedFunc.clear = function clear() {
    cache.clear();
  };

  Object.defineProperty(memoizedFunc, "name", {
    value: `memoized_${fn.name}`,
    configurable: true,
  });

  return memoizedFunc;
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);


function measurePerformance(func, arg) {
  const startTime = process.hrtime.bigint();
  const result = func(arg);
  const endTime = process.hrtime.bigint();
  // 나노초를 밀리초로 변환합니다.
  const duration = (endTime - startTime) / BigInt(1000000);
  console.log(`${func.name}(${arg}) = ${result}, Time: ${duration}ms`);
}


const n = 42;

// 메모이제이션된 피보나치를 측정합니다.
measurePerformance(memoizedFibonacci, n);

// 메모이제이션된 피보나치 두 번째 호출을 측정합니다.
measurePerformance(memoizedFibonacci, n);

// 캐시를 지우고 다시 측정합니다.
console.log("Clearing cache and measuring again:");
memoizedFibonacci.clear();
measurePerformance(memoizedFibonacci, n);


