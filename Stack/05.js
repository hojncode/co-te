/*
1. 행렬 1,2 의 행과 열의 수

2. 결과를 저장할 2차원 배열 초기화

3. 첫번째 행렬1의 각 행과 행렬2의 각 열에 대해

4. 두행의 데이터를 결과 배엘어 더해줌

*/
  
function solution(arr1, arr2) {
  const r1 = arr1.length;
  const c1 = arr1[0].length;

  const r2 = arr1.length;
  const c2 = arr2[0].length;

  const ret = [];

  for (let i = 0; i < r1; i++) {
    ret.push(new Array(c2).fill(0));
  };

  for (let i = 0; i < r1; i++) {
    for (let j = 0; j < c2; j++) {
      for (let k = 0; k < c1; k++) {
        ret[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  console.log("🚀 ~ solution ~ ret:", ret);
  return ret;
}

const arr1 = [[1,4],[3,2],[4,1]];
const arr2 = [[3,3],[3,3]];

solution(arr1, arr2);

