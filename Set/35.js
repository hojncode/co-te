const n = 3;
const words = [
  "tank", "kick", "know",
  "wheel", "land", "dream",
  "mother", "robot", "tank"
];

// result = [3,3]

/*
  조건 : 
  - 끝나는 단어로 시작안할 경우 
  - 걸리는 경우 : 이미 말한 단어

  result = [사람 번호, 걸린 본인의 차례]

*/

function solution(n , words) {
  let result;

  // words를 개인이 말한 리스트로 만들기
  // 1. words / n = 1회 순환

  // 2. 위 배열을 개인당 객체에 담기

  // 3. 각 순번마다 비교하기 , 1의 마지막 글자와 2의 첫글자 비교후 통과되면 다음 / 통과안될시 해당 순번과 순번의 단어인덱스 반환

  // 4. 동일한 단어의 위치 찾기...

  // 5. 워드에서 중복된 단어 찾기

  function findIndex() {
    const seen = new Set();

    for (let i = 0; i < words.length; i++) {
      if (seen.has(words[i])) {
        return i;
      }
      seen.add(words[i]);
    }
    return -1;
  }

  const temp = findIndex(words);
  console.log("🚧  중복된 단어의 인덱스", temp);


  // 앞 요소의 마지막 글자와 다음 요소의 첫글자 비교
  let str = 0;
  for (let i = 0; i < words.length - 1; i++) {
    // console.log("hi", words[i].slice(-1), words[i + 1].slice(0, 1));
    if (words[i].slice(-1) !== words[i + 1].slice(0, 1)) {
      str = i
    }
    // else console.log("???");
    
  }
  console.log("끝말잊기 안된 위치", str)

  // temp 로 반환된 인덱스를 가지는 위치 찾기


  
  //1
  const size = words.length / n;
  console.log("🚧  개인당 단어 갯수", size);

  const sliceArr = [];
  let sliceObj = {};
  for (let i = 0; i < words.length; i += size) {
    
    // sliceArr.push(words.slice(i, i + size));
    sliceObj = words.reduce((acc, crr, index) => {
      acc[index] = crr 
      return acc;
    },{})
  }
  
  console.log("🚧  sliceArr", sliceArr);
  console.log("🚧  sliceObj", sliceObj);

  
  // let temp2;
  // for (let i = 0; i < size; i++) {
  //   temp2 = Object.entries(sliceObj).map(([key, value], index) => { })
  // }
  // console.log("temp2", temp2);

  return result;
}

console.log(solution(n , words));