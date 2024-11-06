function countSort(arr, k) {
  // ➊ 해시 테이블 생성 및 초기화
  const hashtable = new Array(k + 1).fill(0);
  for (const num of arr) {
    // 현재 원소의 값이 k 이하인 때에만 처리
    if (num <= k) {
      // 현재 원소의 값을 인덱스로 해 해당 인덱스의 해시 테이블 값을 1로 설정
      hashtable[num] = 1;
    }
  }

  console.log("🚧  hashtable", hashtable);
  return hashtable;
}

function solution(arr, target) {
  const hashtable = countSort(arr, target);
  for (const num of arr) {
    const complement = target - num;
    // ➋ target에서 현재 원소를 뺀 값이 해시 테이블에 있는지 확인
    if (
      complement !== num &&
      complement >= 0 &&
      complement <= target &&
      hashtable[complement] === 1
    ) {
      return true;
    }
  }

  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6)); // true
// console.log(solution([2, 3, 5, 9], 10)); // false