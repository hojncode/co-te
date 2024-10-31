// numbers.length >= 2 && numbers <= 100
// numbers >= 2 && numbers <= 100


const numbers = [];

function solution(numbers) {
  // 두개 뽑아 더해
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      ret.push(numbers[i] + numbers[j])
    };
  }
 
  return [...new Set(ret)].sort((a,b) => a - b)

  // 새 배열에 담아

  // 오름차순 & 중복 제거
}
