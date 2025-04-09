// 표 편집

//입출력 케이스1
const n = 8; // 처음 표의 행의 개수
const k = 2; // 처음에 선택한 행의 위치
const cmd = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"]; // 수행한 명령
// result = "OOOOXOOO"

//입출력 케이스2
// const n = 8; // 처음 표의 행의 개수
// const k = 2; // 처음에 선택한 행의 위치
// const cmd = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"] // 수행한 명령
// // result = "OOXOXOOO"



/*
커맨드 : D , U , C , Z
n = 행의 갯수
k = 처음 선택된 위치

answer = 처음 상태와 현재 상태 비교한 문자열 (O,X 로 표현)

1. 삭제가 되어도 기록할 수 있는 배열이 필요함.
2. 현재 행에서 삭제가 실행되면 , 아래으로 선택 (아래 행이 현재 순번으로 올라옴)
3. 마지막 행에서 삭제된 경우 바로 위행으로 이동시킴.
4. 복구시 최근 제거된 순서로 다시 생성됨. 이때 현재 선택된 행은 바뀌지 않음.

시간 복잡
- 100만건으로 o(n) 이하 필요 = 이중반복문 안됨.
- 
*/

function solution(n, k, cmd) {
  var answer = '';

  // 1. n 개의 배열 생성 = id (인덱스) , 현재 상태 (O , X)

  // 2. 삭제된 행을 저장하는 스택 생성

  // 3. 이동 계산시 현재 위치 k에 +- 계산

  // 4. 현재 위치는 O 인 행만 계산에 포함

  // 5. 마지막 행이 삭제된 경우 , O 행의 마지막으로 현재 위치 변경


  let tableState = [...Array(n)].map((v, i) => {
    return ({
      id: i,
      state: true
    })
  })

  const deletedTableStack = [];

  //cmd 처리  const cmd = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"]; // 수행한 명령
  for (i = 0; i < cmd.length; i++) {
    const key = cmd[i][0];

    const filteredTable = tableState.filter(v => v.state === true);
    const chosen = filteredTable[k];
    console.log("🚧  chosen\n", chosen);

    switch (key) {
      case "U":
        k = k - Number(cmd[i][2]);
        break;
      case "D":
        k = k + Number(cmd[i][2]);
        break;
      case "C":
        //tableState 에서 현재 선택된 행의 state 를 false 처리 + deletedTableStack.push(현재 선택된 행)
        filteredTable[k].state = false;
        deletedTableStack.push(filteredTable[k]);

        break;
        case "Z":
        // deletedTableStack.pop() 를 tableState 에서 true 처리
        if (deletedTableStack.length > 0) {
          const temp = deletedTableStack.pop();
          if (temp) {
            tableState.find(v => v.id === temp.id).state = true;
          }

        }
        break;
        }
        
      }
  console.log("🚧  tableState\n", tableState.map((v) => v.state === true ? "O" : "X").join(""));


  return tableState;
}

solution(n, k, cmd);