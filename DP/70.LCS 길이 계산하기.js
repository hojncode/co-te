
const str1 = "ABCBDAB";
const str2 = "BDCAB";

function solution(str1, str2) {
  // 두 문자열의 길이 저장
  const m = str1.length;
  const n = str2.length;

  // LCS를 저장할 테이블 초기화
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
  console.log("🚧  dp\n", dp);

  // 동적 프로그래밍을 통해 LCS 길이 계산
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        // 현재 비교하는 문자가 같으면
        dp[i][j] = dp[i-1][j-1] + 1;
      } else {
        // 현재 비교하는 문자가 같지 않으면
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
      }
    }
  }

  // LCS 길이 반환
  return dp[m][n];
}

console.log(solution(str1, str2));