const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];
//result = "leo";

// const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
// const completion = ["josipa", "filipa", "marina", "nikola"];
//result = "vinko";

// const participant = ["mislav", "stanko", "mislav", "ana"];
// const completion = ["stanko", "ana", "mislav"];
//result = "mislav";

function solution(participant, completion) {
  let result;
  // participant 객체로 만들기 , (단 , 중복된 이름은 그 수만큼 밸류 + 1);

  /*
    reduce : 배열의 각 요소를 객체에 누적시켜서 반환 (여기서는 밸류에 1을 추가 - 중복된 이름일 경우 +1 하기 위함)
  */
  let obj = participant.reduce((accumulator, currentValue, index, array) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
  }, {})

  /*
    completion 배열의 요소 값이 obj 의 키값으로 있는 경우 해당 밸류를 -1
  */
  for (let i = 0; i < completion.length; i++) {
    if (obj.hasOwnProperty(completion[i])) {
      obj[completion[i]] = obj[completion[i]] - 1
    }

  /*
    Object.keys - 키 만 배열로 반환 [key]
    Object.fromEntries - 키-밸류 배열(2차원) 을 객체로 변환
    Object.entries - 객체 전체를 2차원 배열로 반환 [[key, value], [key2, value2]]
  */
    result = Object.keys(
      Object.fromEntries(
        Object.entries(obj)
          .filter(([key, value], index) => value !== 0))).flat().join("")
  }

  console.log("🚧  result", result);
  return result;
};

solution(participant, completion);


