const N = 5;
const k = 2;
// return = 3;

// queue
class Queue {
  items = [];
  front = 0;
  rear = 0;
  // size = this.items.length;

  push(data) {
    this.items.push(data);
    this.rear++
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.front++]
  }

  isEmpty() {
    this.front === this.rear
  }

  getSize() {
    return this.size = this.rear - this.front;
  }

}

/**
 * 
 * @param {number} N 
 * @param {number} k 
 */
function solution(N, k) {
  /*
    처음 기준 : 1번
    삭제 위치 : 기준 포함 k번째
    삭제후 기준 : 삭제 위치 다음 위치

    결과 : 마지막까지 남은 번호.

    삭제 위치 ? 배열[k - 1]
    다음 기준: 

    삭제 위치 부터 앞의 모든 요소를 제거 -> 배열 뒤부터 push
    삭제 이후 다시 삭제 위치 찾기
    반복..
  */

  // queue
  const q = new Queue();

  for (let i = 0; i < N; i++) {
    q.push(i + 1);
  }

  // q 요소가 1개가 될때 까지.
  while (q.getSize() > 1) {
    // k - 1 의 요소를 팝해서 뒤에 푸시
    for (let i = 0; i < k - 1; i++) {
      q.push(q.pop());
    }
    // k번째 요소 팝
    q.pop()
  }

  // 마지막 요소 반환
  return q.pop();

};

solution(N, k);
console.log("답 :", solution(N, k));