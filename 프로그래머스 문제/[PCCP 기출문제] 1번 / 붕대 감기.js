// 케이스 1
const bandage = [5, 1, 5]; // 시전시간 , 초당 회복량 , 추가 회복량
const health = 30; // 최대 체력
const attacks = [[2, 10], [9, 15], [10, 5], [11, 5]]; // 공격 시간, 피해량
// result = 5 // 남은 체력

// [3, 2, 7]	20	[[1, 15], [5, 16], [8, 6]]	-1
// [4, 2, 7]	20	[[1, 15], [5, 16], [8, 6]]	-1
// [1, 1, 1]	5	[[1, 2], [3, 2]]	3

/*
  조건1. 회복이 끊기면 , 시전시간 초기화.
  조건2. 최대 체력 이상은 넘어갈 수 없음.
  조건3. 체력이 0이하가 되면 -1 반환.
*/

// const [bandage, health, attacks] = testCase();

//? 다음 공격시간의 텀이 시전시간보다 큰 경우에만 추가 회복량 적용

//! else 문 사용하지 않는 경우 , continue 로 처리 할것
function solution(bandage, newHealth, attacks) {
  let charge = 0;
  let getHealth = newHealth;
  let attackIndex = 0;
  const length = attacks[attacks.length - 1][0]  // 1초씩 카운트

  for (let i = 0; i <= length; i++) {
    // 공격시간에 해당하면, 피해량 만큼 체력 계산 + 연속 회복 초기화
    if (attacks.length > attackIndex && i === attacks[attackIndex][0]) {
      charge = 0;
      getHealth -= attacks[attackIndex][1];
      attackIndex++

      if (getHealth <= 0) return -1;
    }

    else {
      // 체력회복 로직
      getHealth = getHealth + bandage[1];
      charge++;

      // 연속 회복 여부 확인 => 시전시간을 다 채울경우 추가 회복
      if (charge === bandage[0]) {
        charge = 0;
        getHealth = getHealth + bandage[2];
      }

      // 최대체력 초과시
      if (getHealth >= newHealth) {
        getHealth = newHealth;
        charge = 0;
      }
    }


  }

  return getHealth;
}

console.log(solution(bandage, health, attacks));





// continue 사용시
function solution2(bandage, newHealth, attacks) {
  let charge = 0;
  let getHealth = newHealth;
  let attackIndex = 0;
  const length = attacks[attacks.length - 1][0]  // 1초씩 카운트

  for (let i = 0; i <= length; i++) {
    // 공격시간에 해당하면, 피해량 만큼 체력 계산 + 연속 회복 초기화
    if (attacks.length > attackIndex && i === attacks[attackIndex][0]) {
      charge = 0;
      getHealth -= attacks[attackIndex][1];
      attackIndex++

      if (getHealth <= 0) return -1;
      continue;
    }

    // 체력회복 로직
    if (getHealth < health) {
      getHealth = getHealth + bandage[1];
      charge++;
    }

    // 연속 회복 여부 확인 => 시전시간을 다 채울경우 추가 회복
    if (charge === bandage[0]) {
      charge = 0;
      getHealth = getHealth + bandage[2];
    }

    // 최대체력 초과시
    if (getHealth >= newHealth) {
      getHealth = newHealth;
      charge = 0;
    }



  }

  return getHealth;
}

console.log(solution2(bandage, health, attacks));
