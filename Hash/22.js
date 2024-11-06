const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

/*
  result = [
    "Prodo님이 들어왔습니다.", 
    "Ryan님이 들어왔습니다.",
    "Prodo님이 나갔습니다.",
    "Prodo님이 들어왔습니다"
  ];
*/


/*
첫글자: Enter, Leave, Change
아이디: 길이 <= 10 , 대소문자 구별
*/

const textMapping = {
  "Enter": "님이 들어왔습니다.",
  "Leave": "님이 나갔습니다."
}

function solution(record) {
  let result = [];
  
  // O(N)
  const obj = record.reduce((arr, crr) => {
    arr[crr.split(" ")[1]] = crr.split(" ")[2]
    return arr
  }, {})

  // O(N)
  for (let i = 0; i < record.length; i++) {
    if (record[i].split(" ")[0] !== "Change") {
      result.push(obj[record[i].split(" ")[1]] + textMapping[record[i].split(" ")[0]] )
    }
  }

  return result;
}

// solution(record);
console.log("🚧  solution(record)", solution(record));
