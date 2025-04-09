function solution(n, k, cmd) {
  // ✅ 각 행을 양방향 연결 리스트로 관리 (빠른 삭제 및 복구)
  const tableState = Array(n).fill(true); // O, X 저장
  const deletedTableStack = [];

  // 링크드 리스트 (prev, next 활용)
  const prev = Array(n).fill(null);
  const next = Array(n).fill(null);

  for (let i = 0; i < n; i++) {
    prev[i] = i - 1;
    next[i] = i + 1;
  }
  next[n - 1] = null; // 마지막 행의 next는 없음

  // ✅ 명령 처리
  for (const command of cmd) {
    const [cmdType, num] = command.split(" ");
    const move = Number(num);

    switch (cmdType) {
      case "U": {
        for (let i = 0; i < move; i++) {
          k = prev[k]; // 위로 이동
        }
        break;
      }
      case "D": {
        for (let i = 0; i < move; i++) {
          k = next[k]; // 아래로 이동
        }
        break;
      }
      case "C": {
        deletedTableStack.push([k, prev[k], next[k]]); // 삭제된 행 정보 저장
        tableState[k] = false; // X 처리

        // 링크드 리스트 업데이트 (삭제된 행 제외)
        if (prev[k] !== null) next[prev[k]] = next[k];
        if (next[k] !== null) prev[next[k]] = prev[k];

        // 선택된 행 변경 (아래로 이동, 마지막 행이면 위로 이동)
        k = next[k] !== null ? next[k] : prev[k];
        break;
      }
      case "Z": {
        if (deletedTableStack.length > 0) {
          const [restored, restoredPrev, restoredNext] = deletedTableStack.pop();
          tableState[restored] = true; // 복구

          // 링크드 리스트 복구
          if (restoredPrev !== null) next[restoredPrev] = restored;
          if (restoredNext !== null) prev[restoredNext] = restored;
        }
        break;
      }
    }
  }

  // ✅ 결과 문자열 생성
  return tableState.map(state => (state ? "O" : "X")).join("");
}