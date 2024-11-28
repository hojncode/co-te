// const nums = [3, 1, 2, 3]; // result 2
const nums = [3, 3, 3, 2, 2, 4]; // 3
// const nums = [3, 3, 3, 2, 2, 2]; // 2

function solution(nums) {
  let result;
  // 숫자  : 갯수  (객체);

  /*
    풀이 :
    nums 배열의 숫자의 갯수를 객체화.
    N/2 와 객체의 키 갯수를 비교하여 결과 도출
  */

  const total = nums.length / 2;

  const obj = nums.reduce((acc, crr) => {
    acc[crr] = (acc[crr] || 0) + 1;
    return acc
  }, {});

  const keyCount = Object.keys(obj).length;

  if (total <= keyCount) {
    result = total
  }
  else if (total > keyCount) {
    result = keyCount;
  }

  return result;

}

console.log("🚧  solution", solution(nums));