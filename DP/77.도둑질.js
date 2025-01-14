const n = [1, 2, 3, 1];

function solution(n) {
  const length = n.length;

  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      arr1.push(n[i])
    }

    if (i % 2 !== 0) {
      arr2.push(n[i])
    }
  }

  const reduce1 = arr1.reduce((arr, item) => {
    return arr + item
  }, 0)

  const reduce2 = arr2.reduce((arr, item) => {
    return arr + item
  }, 0)

  return Math.max(reduce1, reduce2);
}

console.log(solution(n));
