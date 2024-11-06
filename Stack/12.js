// 주식가격

/*
총 n초.
 초단위 기록 배열 prices -> 매개변수

 1초 에서  n초까지 1초의 주가보다 낮은게 처음 나오는 순번 찾기 , 순번 - 1
  2초에서 n초까지 2초의 주가보다 낮은 주가가 처음 나오는 순번 찾기 , 순번 - 2

prices.length 

반복시켜서 , 현재 순번의 값 - 현재 순번의 값보다 처음으로 낮은 값이 나오는 순번

return prices.length - 계산 값

*/

function solution(prices) {
  const result = prices.map((price, index) => {
    // console.log("⚙️  file: 12.js:20  price", price)
    // console.log("-", prices.slice(index + 1));
    return prices.slice(index + 1).filter(nextPrice => nextPrice >= price).length; // 이후 순번들 중 크거나 같은 값 개수 계산
  });

  return result;
};

const prices = [1, 2, 3, 2, 3];
solution(prices);
console.log("⚙️  file: 12.js:28  solution(prices);", solution(prices));
