// 케이스 1, result 3
const schedules = [700, 800, 1100];
const timelogs = [[710, 2359, 1050, 700, 650, 631, 659], [800, 801, 805, 800, 759, 810, 809], [1105, 1001, 1002, 600, 1059, 1001, 1100]];
const startday = 5;

// 케이스 2, result 2
// const schedules = [730, 855, 700, 720];
// const timelogs = [[710, 700, 650, 735, 700, 931, 912], [908, 901, 805, 815, 800, 831, 835], [705, 701, 702, 705, 710, 710, 711], [707, 731, 859, 913, 934, 931, 905]];
// const startday = 1;

/*
분석
startday 는 숫자로 구분 , 6과 7 은 계산에 포함하지 않음.
schedules[i] 를 timelogs[i] 요소들과 비교 = 월~금 중 통과하면 result + 1
*/

function solution(schedules, timelogs, startday) {
  let result = 0;
  const weekdayIndices = [];

  for (let j = 0; j < 7; j++) {
    let calDate = (j + startday - 1) % 7 + 1;
    if (calDate !== 6 && calDate !== 7) {
      weekdayIndices.push(j);
    };
  }

  for (let i = 0; i < timelogs.length; i++) {
    let isPass = true;

    for (let idx of weekdayIndices) {
      if (timelogs[i][idx] - schedules[i] > 10) {
        isPass = false;
        break;
      }
    }

    if (isPass) {
      result++
    }
  }


  return result;
}
solution(schedules, timelogs, startday)
console.log(solution(schedules, timelogs, startday));

