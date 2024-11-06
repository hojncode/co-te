/*
18-두 개의 수로 특정값 만들기
n개의 양의 정수로 이루어진 리스트 arr와 정수 target이 주어졌을 때 
이중에서 합이 target인 두 수가 arr에 있는지 찾고 , 
있으면 true, 없으면 false 를 반환하는 solution 함수를 만드시오.
*/

// 케이스 1
// const arr = [1, 2, 3, 4, 8]
// const target = 6
// return True

// 케이스 2
const arr = [2,3,5,9]
const target = 10
// return False


// 풀이 2 - O(N)
/*
arr를 해시테이블로 사용 - arr 요소의 최대값
해시테이블 크기 = arr 요소의 최대값
arr 요소는 해쉬의 value 를 1로 지정.
결과값 계산을 위해 ,target 보다 작은 요소까지만 해시 테이블로 작성

*/
const getHashTable = (arr, target) => {
  const hashTable = new Array(target + 1).fill(0);

  for (const key of arr) {
    if (key <= target) {
      hashTable[key] = 1
    }
  }
  console.log("🚧  hashTable", hashTable);

  return hashTable;
}


function solution(arr, target) {
  let result = "False";


  const hashTable = getHashTable(arr, target);

  for (let i = 0; i < arr.length; i++) {
    const calValue = target - arr[i];

    // 예외에 대한 정의 유의 할것.
    if (hashTable[calValue] === 1
      && calValue !== arr[i]
      && calValue <= target
      && calValue >= 0
    ) {
      result = "True"
      return result;
    }
  }

  return result;
}

solution(arr, target);
console.log("⚙️ variable solution(arr, target)", solution(arr, target));

