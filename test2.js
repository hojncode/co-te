const rowData = [
  {
    no: 1,
    content: "긴급대응(Emergency) 모드 시",
    name : "emergencyMode",
    alarm: 0,
  },
  {
    no: 2,
    content: "정지(Stop)모드 시",
    name : "stopMode",
    alarm: 0,
  },
  {
    no: 3,
    content: "이상 종료 시",
    name : "abnormalTerminate",
    alarm: 0,
  },
  {
    no: 4,
    content: "[오더북] 체결 건수 5건 이상 발견 시",
    name : "orderError",
    alarm: 0,
  },
  {
    no: 5,
    content: "[체결] 미체결 건수 5건 이상 발견 시",
    name : "tradeError",
    alarm: 0,
  },
  {
    no: 6,
    content: "부족하여 주문 생성 불가 시",
    name : "lackOfAsset",
    alarm: 0,
  },
  {
    no: 7,
    content: "AUC 시세가 직전 시세와 N%이상 차이날 시",
    name : "overChange",
    alarm: 0,
  },
  {
    no: 8,
    content: "AUC 시세가 1시간 동안 변동 없을 시",
    name : "noQuoteChange",
    alarm: 0,
  },
  {
    no: 9,
    content: "관리자 설정 변경 발생 시",
    name : "adminError",
    alarm: 0,
  },
];

const mockData = {
  emergencyMode: true, // true == 수신, false == 미수신
  stopMode: true,
  abnormalTerminate: false,
  orderError: true,
  tradeError: true,
  lackOfAsset: true,
  overChange: true,
  noQuoteChange: false,
  adminError: false,
};

function temp(rowData) {
  let result; 
  result = rowData.reduce((acc, crr, index) => {
    acc[crr.name] = crr.alarm === 0 ? true : false
    return acc
  },{})
  
  return result;

}

// temp(rowData);
console.log("🚧  temp(rowData)", temp(rowData));
