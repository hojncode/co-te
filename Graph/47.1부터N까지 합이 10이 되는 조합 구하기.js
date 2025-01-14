function solution(N) {
  const results = [];

  // backTrack
  function backTrack(sum, selectedNums, start) {
    if (sum === 10) {
      results.push(selectedNums);
      return;
    }

    for (let i = start; i <= N; i++) {
      if (sum + i <= 10) {
        backTrack(sum + i, selectedNums.concat(i), i + 1);
      }
    }

  }

  backTrack(0, [], 1);

  return results
}