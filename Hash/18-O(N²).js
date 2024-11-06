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


// 풀이 1 - O(N²) '배열은 값을 모두 확인해야하기에 비효율..이중반복문'
function solution(arr, target) {
  let result = "False";

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[i] + arr[i + j + 1] === target) {
        result = "True"
        return result; // result 에 대한 할당과 반환을 분리하여 처리함.
      }
    }
  }
  return result;
}

solution(arr, target);
console.log("⚙️ variable solution(arr, target)", solution(arr, target));

