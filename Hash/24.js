const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
const k = 2;
// result = [2,1,1,0];

// const id_list = ["con", "ryan"];
// const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
// const k = 3;
//resout = [0,0];



/*
  1 . id_list 객체 - {id : name}
 
  2. report - 중복 제거 ,
  
  3. report 객체에서 k 보다 큰 값이 있는 아이디 찾기
 
  // 신고횟수 = report[1] 의 갯수: ex) { muzi: 1, apeach : 2 }
  신고 리스트 = [muzi, apeach]
  
  이메일 발송 = 신고리스트에 있는 유저만
  { 
    muzi : [
      {neo : 3} , 
      {apeach : 1}
    ],
    neo : [
      {muzi : 2}
    ],
  }

*/

function solution(id_list, report, k) {
  let result;
  let id_obj = {};
  const newArr = [...new Set(report)];
  let history = {};
  let countReport = {};

  // {아이디 : 이름}
  id_obj = id_list.reduce((arr, crr) => {
    arr[crr] = 0
    return arr;
  }, {})


  // 유저가 신고 당한 횟수
  newArr.forEach((item) => {
    return countReport[item.split(" ")[1]] = (countReport[item.split(" ")[1]] || 0) + 1;
  })

  // 유저당 신고한 내역 = {유저이름 : []}
  newArr.forEach((item) => {
    const [name, name2] = item.split(" ");

    if (!history[name]) {
      history[name] = {};
    }

    history[name][name2] = (history[name][name2] || 0) + 1;

  })

  const confirmReport = Object.entries(countReport).filter(([key, value], index) => value >= k).map((v, i) => v[0])

  Object.entries(history).map(([key, value], index) => {
    let cnt = 0;
    for (let i = 0; i < confirmReport.length; i++) {
      if (value[confirmReport[i]] !== undefined) cnt++
    }
    id_obj[key] = cnt
  })

  result = Object.values(id_obj)
  return result;
}

console.log("🚧  solution(id_list, report , k)", solution(id_list, report, k));

