const nums = [1, 4, 2, 3, 1, 5, 7, 3];
// return 5

function solution(nums) {
  const nLength = nums.length;

  const dp = Array(nLength).fill(1);
  //// 0 dp: [1, 1, 1, 1, 1, 1, 1, 1]
  // 1 dp: [1, 2, 1, 1, 1, 1, 1, 1]
  // 2 dp: [1, 2, 2, 1, 1, 1, 1, 1]
  // 3 dp: [1, 2, 2, 3, 1, 1, 1, 1]
  // 4 dp: [1, 2, 2, 3, 1, 1, 1, 1]
  // 5 dp: [1, 2, 2, 3, 1, 4, 1, 1]
  // 6 dp: [1, 2, 2, 3, 1, 4, 5, 1]
  // 7 dp: [1, 2, 2, 3, 1, 4, 5, 3]


  for (let i = 0; i < nLength; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

console.log(solution(nums));
