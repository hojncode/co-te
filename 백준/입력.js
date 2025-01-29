// 한줄 입력시
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString(); 

input = input.split(' ');
console.log("🚧  input\n", input);


// 여러줄 입력시.
// const fs = require('fs');

// let input = fs.readFileSync('/dev/stdin').toString();

// input = input.split('\n'); // 한 줄씩 데이터 분리

// const testCaseNum = +input[0];
// const inputTestCase = [];

// for(let i=1; i <= testCaseNum; i++){
//     const arr = input[i].split(' ').map((item) => +item);
   
//     const newArr = []; // testCase의 arr
//     for (let i=1; i<=arr[0]; i++) {
//         newArr.push(arr[i]);
//     }
//     const testCase = {
//         N : arr[0], 
//         arr: newArr,
//     };
//     inputTestCase.push(testCase);
// }