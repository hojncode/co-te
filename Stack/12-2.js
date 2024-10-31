// O(N) 으로 풀기

function solution(prices) {
  const n = prices.length;
  let answer = new Array(n).fill(0); // 인덱스(여기서는 지점)의 유지 시간

  // 가격이 하락하는 지점 구해서 , 그 지점보다 높은 인덱스들의 길이 구하기
  const stack = [0]; // prices 의 . 각 인덱스를 저장.
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }

  // 가격을 못구한 지점은 , Prices 배열의 끝까지 하락하지 않음.
  while (stack.length > 0) {
    const j = stack.pop();
    answer[j] = n - j -1;
  }

  return answer;
  
}

const prices = [1, 2, 3, 2, 3];
solution(prices);
console.log("⚙️  file: 12-2.js:26  solution", solution(prices))


// 답 : [4,3,1,1,0];