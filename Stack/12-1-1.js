function solution(prices) {
  const result = prices.map((price, index) => {
    let time = 0;

    for (let j = index + 1; j < prices.length; j++) {
      time++;
      if (prices[j] < price) {
        break; 
      }
    }

    return time;
  });

  return result;
};

const prices = [1, 2, 3, 2, 3];
console.log(solution(prices)); 
