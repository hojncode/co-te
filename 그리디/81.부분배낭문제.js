const items = [[10, 19], [7, 10], [6, 10]];
const weight_limit = 15;
// 27.33

function solution(items, weight_limit) {
  let result = 0;

  // items 1키로당 가치 구하기
  const itemArr = items;

  for (let i = 0; i < items.length; i++) {
    const price = items[i][1] / items[i][0]
    itemArr[i].push(price)
  }

  const rankArr = []
  for (let j = 0; j < itemArr.length; j++) {
    const rank = itemArr[j][2]
    rankArr.push(rank)
  }
  const rankSortArr = rankArr.sort((a, b) => b - a)

  let weight = weight_limit;

  let sortItemArr = []
  for (let k = 0; k < rankSortArr.length; k++) {
    sortItemArr.push(itemArr.find((v) => v[2] === rankSortArr[k]))
  };  

  for (let l = 0; l < sortItemArr.length; l++) {
    if (weight > sortItemArr[l][0]) {
      weight = weight - sortItemArr[l][0]
      result = result + sortItemArr[l][0]*sortItemArr[l][2];
    } else {
      const fraction = weight / sortItemArr[l][0];
      result = result + sortItemArr[l][1] * fraction;
      break;
    }
  }

  return result;
}

console.log(solution(items, weight_limit));