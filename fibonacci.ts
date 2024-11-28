// fibonacci.ts;
type AnyFunction = (...args: any[]) => any;

interface MemoizedFunction<T extends AnyFunction> extends CallableFunction {
  (...args: Parameters<T>): ReturnType<T>;
  clear: () => void;
}

// memoize
function memoize<T extends AnyFunction>(fn: T): MemoizedFunction<T> {
  const cache = new Map<string, ReturnType<T>>();

  const memoizedFunction = function (...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = fn(...args);
    cache.set(key, result);

    return result;
  } as MemoizedFunction<T>;

  memoizedFunction.clear = function clear() {
    cache.clear();
  };

  Object.defineProperty(memoizedFunction, "name", {
    value: `memoized_${fn.name}`,
    configurable: true,
  });

  return memoizedFunction;
}

// fibonacci
function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

// measurePerformance
function measurePerformance(
  func: MemoizedFunction<typeof fibonacci>,
  arg: number
) {
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
memoizedFibonacci.clear();
measurePerformance(memoizedFibonacci, n);