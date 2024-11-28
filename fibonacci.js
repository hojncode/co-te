// memoize
function memoize(fn) {
    var cache = new Map();
    var memoizedFunction = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        var result = fn.apply(void 0, args);
        cache.set(key, result);
        return result;
    };
    memoizedFunction.clear = function clear() {
        cache.clear();
    };
    Object.defineProperty(memoizedFunction, "name", {
        value: "memoized_".concat(fn.name),
        configurable: true,
    });
    return memoizedFunction;
}
// fibonacci
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
var memoizedFibonacci = memoize(fibonacci);
// measurePerformance
function measurePerformance(func, arg) {
    var startTime = process.hrtime.bigint();
    var result = func(arg);
    var endTime = process.hrtime.bigint();
    // 나노초를 밀리초로 변환합니다.
    var duration = (endTime - startTime) / BigInt(1000000);
    console.log("".concat(func.name, "(").concat(arg, ") = ").concat(result, ", Time: ").concat(duration, "ms"));
}
var n = 42;
// 메모이제이션된 피보나치를 측정합니다.
measurePerformance(memoizedFibonacci, n);
// 메모이제이션된 피보나치 두 번째 호출을 측정합니다.
measurePerformance(memoizedFibonacci, n);
// 캐시를 지우고 다시 측정합니다.
memoizedFibonacci.clear();
measurePerformance(memoizedFibonacci, n);
