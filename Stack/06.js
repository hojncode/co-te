// const N = 5;
// const stages = [2, 1, 2, 6, 2, 4, 3, 3]
//   //[3, 4, 2, 1, 5];

// function solution(N, stages) {
//   const challenger = new Array(N + 2).fill(0);
//   for (const stage of stages) {
//     challenger[stage] += 1;
//   }
//   console.log("🚀 ~ solution ~ challenger:", challenger)

//   const fails = {};
//   let total = stages.length;
  
//   for (let i = 1; i <= N; i++) {
//     if (challenger[i] === 0) {
//       fails[i] = 0;
//       continue;
//     }
//     console.log("🚀 ~ solution ~ fails:", fails)

//     fails[i] = challenger[i] / total;

//     total -= challenger[i];
//     console.log("🚀 ~ solution ~ total:", total)
//   }

//   const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);
//   console.log("🚀 ~ solution ~ result:", result)
  
//   console.log("🚀 ~ solution ~ result.map((v) => Number(v[0])):", result.map((v) => Number(v[0])))
//   return result.map((v) => Number(v[0]));
// }

// solution(N, stages);



const N = 5; // 총 스테이지
const stages = [2, 1, 2, 6, 2, 4, 3, 3] // 스테이지 당 멈춰있는 유저

// 실패율 구하기

function solution(N, stages) {
  // 스테이지별 도전자 수
  const challenger = new Array(N + 2).fill(0);
  for (const stage of stages) {
    challenger[stage] += 1;
  }

  const fails = {};
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      fails[i] = 0;
      continue;
    }

    fails[i] = challenger[i] / total;

    total = total - challenger[i]
  }

  const pre_result =  Object.entries(fails).sort((a,b) => b[1] - a[1])
  result = pre_result.map((v,i) => +v[0])
  return result;
}

solution(N, stages);