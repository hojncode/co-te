function memo(fn) {
  const cache = new Map();

  // 1. 메모 함수 (캐시에 존재하는지 여부 판단 + 존재하지 않으면 -> 인자를 캐시에 추가함.)
  function memoizedFunc(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);

    return result;
  }

  // 캐시 초기화
  memoizedFunc.clear = function clear() {
    cache.clear();
  }

  Object.defineProperties(memoizedFunc, "name", {
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

const memoizedFibonacci = memo(fibonacci);