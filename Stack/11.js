/*
문제 접근 : 

1,2 비교해서 다르면 1번을 스택에 푸시
2,3 비교해서 같으면 2,3 제거

문자열 한문자씩 나눠서 배열에 저장.

배열 길이만큼 반복 시킴.
i, i+1 비교
같으면 i, i+1 제거하고 -> 나머지 스택에 푸시
다르면 ? 다음 회차로 

*/


// 1차 시도
// function solution(s) {
//   let arr = s.split("");
  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]){
//       arr.splice(i, 2);
//     }
//   }
//   }

// const s = "baabaa";
// solution(s);

// 최종 답
function solution(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[s.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push();
    }
  }

  return stack.length === 0 ? 1:0
}

const s = "baabaa";
solution(s);