/*
  Q: 
  시켰을때, 올바른 문자열이 되게하는 x 의 갯수
  0 <= x < s.length
  s 는 1 이상 , 1000 이하
**/

  
/*
  예외 상황:
    1. s 의 길이가 홀수
    2. [((] 짝이 안맞는 경우
    3. {(}) 배치가 잘못된 경우
      return 0

  성공 케이스
    회전 수 : s 길이
    1회전 = 반복문 1회 실행
    빈 배열에 첫번째 요소를 마지막에 푸시
    위 배열 확인
      열린모양으로 시작하는지 -> 열1, 열2, 열3 이면 닫3 닫2 닫1 
    
      케이스1 : 열1, 열2, 닫2, 열3, 닫3, 열1

      열린 배열 = 열1 열2 열3
      닫힌 배열 = 닫3 닫2 닫1
      닫힌 배열 리버스

      열린 배열 = 닫힌 배열 비교

      return 1
  
  구현
    s 를 개별로 split.
  */ 

/**
 * @param {string} s
 * @param {number} result
 * @return {number}
*/
function solution(s) {
  let result;
  let tempArr = s.split('')
  let totalValidRotations = 0;

  // 회전
  for (let i = 0; i < s.length; i++) {
    // 회전후 배열
    const afterTurnedArr = tempArr.slice(1).concat(tempArr[0]);
    tempArr = afterTurnedArr;

    // 각 회전마다 스택 초기화
    let stack = [];
    let isValid = true;

    afterTurnedArr.forEach((element, index) => {
      switch (element) {
        case "{":
        case "[":
        case "(":
          stack.push(element)
            break;
        case "}":
          if (stack.length === 0 || stack.pop() !== "{") {
            isValid = false;
          }
          break;
        case ")":
          if (stack.length === 0 || stack.pop() !== "(") {
            isValid = false;
          }
          break;
        case "]":
          if (stack.length === 0 || stack.pop() !== "[") {
            isValid = false;
          }
          break;
        }
    });
      // 스택이 비어 있고 유효성 검사를 통과하면 count 증가
      if (isValid && stack.length === 0) {
        totalValidRotations++;
      }
      console.log("result" , totalValidRotations);
  }
  return result;
}

const s = "[](){}"
solution(s);
