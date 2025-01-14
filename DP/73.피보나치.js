const n = 5

// const fb = (n) => {
//   if (n <= 2) return 1;

//   const memo = [];

//   const result = fb(n - 1) + fb(n - 2);

//   return result;
// }
// console.log("🚧  fb\n", fb(n));


function solution(n) {
  const divide = 1234567;
  
  const fib = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    fib.push((fib[i - 1] + fib[i - 2]));
  }
  return fib[n] % divide;
}

console.log("🚧  solution\n", solution(n));

function solution(n) {
  const divide = 1234567;
  const fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    // 피보나치 수를 계산해서 배열에 추가
    fib[i] = (fib[i - 1] + fib[i - 2]);
  }

  // n번째 피보나치 수 반환
  return fib[n]  % divide ;
}




function solution(n) {
  const divide = 1234567;
  
  const fib = [0, 1];
  
  for (let i = 2; i <= n; i++) {

    if (n in fib) return;

    fib.push((fib[i - 1] + fib[i - 2]));
  }
  return fib[n] % divide;
}

console.log("🚧  solution\n", solution(n));










// function fib(n) {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// function memo(fn) {
//   const cache = new Map();

//   function memoFunc(...args) {
//     const key = JSON.stringify(args)

//     if (cache.has(key)) {
//       return cache.get(key)
//     }

//     const result = fn.apply(this, args);
//     cache.set(key, result)
//     return result % 1234567
//   }

//   return memoFunc
// }

// function solution(n) {
//   const callMemo = memo(fib);
  
//   return callMemo(n)
// }

// console.log(solution(n));

// // const n = 5;

// // function fib(n) {
// //   if (n <= 2) return 1;
// //   return fib(n - 1) + fib(n - 2);
// // }

// // function memo(fn) {
// //   const cache = new Map();

// //   function memoFunc(...args) {
// //     const key = JSON.stringify(args)

// //     if (cache.has(key)) {
// //       return cache.get(key)
// //     }

// //     const result = fn.apply(this, args);
// //     cache.set(key, result)
// //     return result % 1234567
// //   }

// //   return memoFunc
// // }

// // const callMemo = memo(fib);

// // console.log("🚧  callMemo\n", callMemo(n));

