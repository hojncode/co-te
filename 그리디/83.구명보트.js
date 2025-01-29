// 권장시간 40분
// 실제 소요 x

// const people = [70, 50, 80, 50];
// const limit = 100;
// return 3

const people = [70, 80, 50];
const limit = 100;
// // return 3

// 최대 한번에 2명
// 무게 제한 있음 40 이상 , 240 이하
// 필요한 구명 보트의 최소 갯수 구하기

// 잘못된 풀이 1
/*
function solution(people, limit) {
  let result = 0;

  // people 오름차순 정렬

  // 현재 인원부터 무게제한 보다 작은 경우만 수행
  // 보트 ++
  // 보트는 다시 새보트로 계산 진행

  let newPeople = people;

  let newBoat = 0;
  let peopleCnt = 0;

  const sort = newPeople.sort((a, b) => a - b);

  for (let i = 0; i < sort.length; i++) {

    if ( peopleCnt % 2 === 0 || newBoat + sort[i] > limit) {
      console.log("newBoat", newBoat);
      result++;
      newBoat = 0;
    }

    newBoat = newBoat + sort[i];
    peopleCnt++;
    
  };

  return result;
}

console.log(solution(people, limit));
*/


// 풀이 2

// 오름차순 정렬만으로 풀면 안됨.
// 가장 무거운 사람과 가장 가벼운 사람을 짝으로 태우기.
// 가장 무거운 사람부터 태우기
function solution(people, limit) {
  let result = 0;

  people.sort();

  let i = 0; // 가장 가벼운 사람 인덱스
  let j = people.length - 1; // 가장 무거운 사람 인덱스

  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      i++;
    }
    j--;
    result++;
  }
  return result;
}

console.log(solution(people, limit));