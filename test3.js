const data = [
  { no: 1, name: "emergencyMode", content: "긴급대응(Emergency) 모드 시", alarm: 1 },
  { no: 2, name: "stopMode", content: "정지(Stop)모드 시", alarm: 1 },
  { no: 3, name: "abnormalTerminate", content: "프로그램 이상 종료 시", alarm: 1 },
  { no: 4, name: "orderError", content: "[오더북] 체결 건수 5건 이상 발견 시", alarm: 1 },
  { no: 5, name: "tradeError", content: "[체결] 미체결 건수 5건 이상 발견 시", alarm: 1 },
  { no: 6, name: "lackOfAsset", content: "보유자산 부족하여 주문 생성 불가 시", alarm: 1 },
  { no: 7, name: "overChange", content: "AUC 시세가 직전 시세와 N%이상 차이날 시", alarm: 1 },
  { no: 8, name: "noQuoteChange", content: "AUC 시세가 1시간 동안 변동 없을 시", alarm: 1 },
  { no: 9, name: "adminError", content: "관리자 설정 변경 발생 시", alarm: 1 }
];


const key = data.map(v => v.name);

const temp = data.find(e => e.name === key).content;
console.log("🚧  temp\n", temp);
