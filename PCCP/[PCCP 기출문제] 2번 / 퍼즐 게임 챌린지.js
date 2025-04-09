/*

퍼즐의 난이도를 순서대로 담은 1차원 정수 배열 diffs, 
퍼즐의 소요 시간을 순서대로 담은 1차원 정수 배열 times, 
전체 제한 시간 limit이 매개변수로 주어집니다. 

*/

//케이스 1 , result 3
const diff = [1, 5, 3];
const times = [2, 4, 7];
const limit = 30;

// 케이스 2, result 2
// const diff = [1, 4, 4, 2]
// const times = [6, 3, 8, 2]
// const limit = 59

// 케이스 3, 294
// const diff = [1, 328, 467, 209, 54]	
// const times = [2, 7, 1, 4, 3]	
// const limit = 1723	

// 케이스 4, 39354
// const diff = [1, 99999, 100000, 99995]
// const times = [9999, 9001, 9999, 9001]
// const limit = 3456789012

/*
레벨 1부터

통과시
times[i]

미통과시
times[i] + times[i-1] 를 diff[i] 가 레벨과 같을때까지 수행.

limit 는 최종 수행
*/

function solution(diff, times, limit) {
  let level = 1;
  let remainingTime = limit;

  for (let i = 0; i < diff.length; i++) {
    while (diff[i] > level) {
      let timeSpent = times[i] + (i > 0 ? times[i - 1] : 0);
      remainingTime -= timeSpent;
      if (remainingTime < 0) return level;
      level++;
    }
    // 통과 전에 시간이 충분한지 확인
    if (remainingTime < times[i]) return level;
    remainingTime -= times[i];
  }

  console.log("🚧  level\n", level);
  return level;
}

console.log("🚧  solution(diff, times, limit);\n", solution(diff, times, limit));
