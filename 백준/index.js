const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'input.txt'); // 절대 경로 설정
let input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

// 첫 줄 처리
let [N, X] = input[0].split(' ').map(Number);

// 두 번째 줄: 배열 처리
let numbers = input[1].split(' ').map(Number);

// X보다 작은 숫자만 필터링
let result = numbers.filter(num => num < X);

// 결과 출력
console.log(result.join(' '));
