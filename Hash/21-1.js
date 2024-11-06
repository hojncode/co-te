const want = ["banana", "apple", "rice", "pork", "pot"];
const number = [3, 2, 2, 2, 1];
const discount = ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"];
//result 3

/*
  want : number 로 객체 만들기

  discount 에서 연속적으로 객체에 있는 값을 빼는데 , 
  조건 -
    선 예외 처리 : 객체에 없거나 ,
              빼는데 0보다 작거나 하면 false 반환
    모든 객체의 number 가 0이 되는 discount 의 갯수 - 조건 , number 의 총합보다 길어야함 (discount.length > number 의 총합)      

  필요 계산 값:
    1.numbers = number 의 총합
    2. discount 의 반복 길이 = (discount.length > number 의 총합)

    ex: 
    const maximumStartDay = discount.length - numbers 
    discount[0] ~ discount[numbers]
    discount[1] ~ discount[numbers + 1]
    discount[lastStartDay] ~ discount[numbers + lastStartDay]
*/
function solution(want, number, discount) {
  let answer = 0;
  let checkFalse = 0;

  // 객체화
  let obj = want.reduce((acc, crr, index, array) => {
    acc[crr] = number[index]
    return acc
  }, {})

  // number 합
  const numberAcc = number.reduce((acc, crr) => {
    acc += crr
    return acc
  }, 0)

  // 최대 시작일
  const maximumStartDay = discount.length - numberAcc

  for (let i = 0; i < discount.length; i++) {
   
  }
  console.log("🚧  obj2 ---", obj);
  console.log("answer", answer);
  return answer;
}

solution(want, number, discount);