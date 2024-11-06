// ➊ polynomial hash를 구현한 부분
function polynomialHash(str) {
  const p = 31; // 소수
  const m = 1_000_000_007; // 버킷 크기
  let hashValue = 0;
  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }
  return hashValue;
}

function solution(stringList, queryList) {
  // ➋ stringList의 각 문자열에 대해 다항 해시값을 계산
  const hashList = stringList.map((str) => polynomialHash(str));
  console.log("🚧  hashList", hashList);

  // ➌ queryList의 각 문자열이 stringList에 있는지 확인
  const result = [];
  for (const query of queryList) {
    const queryHash = polynomialHash(query);
    console.log("🚧  queryHash", queryHash);
    if (hashList.includes(queryHash)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}


console.log(solution(['apple', 'banana', 'cherry'], ['banana', 'kiwi', 'melon', 'apple']));