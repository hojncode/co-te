//케이스1
// const progresses = [93, 30, 55];
// const speeds = [1, 30, 5];
// return [2 , 1]

//케이스2
const progresses = [95, 90, 99, 99, 80, 99]
const speeds = [1, 1, 1, 1, 1]
//[1,3,2]

/*
p 100개 이하
진도 100미만 자연수
속도 100 이하 자연수
배포는 하루 한번 & 하루 끝에 진행
*/

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(data) {
    this.items.push(data);
    this.rear++
  }

  pop() {
    return this.items[this.front++]
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(progresses, speeds) {
  // A. 순서대로 계산? 0 요소 완료후 다음 요소 계산...
  // B. 각 요소마다 계산? 각 요소 계산 -> 완료된 요소 대기
  // C. 각 요소의 완료 기간 계산 -> 큐 , 큐에서 첫번째 요소보다 큰 요소 이전까지의 갯수를 result 배열에 순서대로 반환.

  const queue = new Queue();

  for (let i = 0; i < progresses.length; i++) {
    const leftProgresses = 100 - progresses[i];
    const finishedDay = Math.ceil(leftProgresses / speeds[i]);
    queue.push(finishedDay);
  };

  const result = [];

  while (queue.size() > 0) {
    const root = queue.items[queue.front];
    let cnt = 1;

    for (let i = queue.front + 1; i < queue.rear; i++) {
      if (queue.items[i] > root) break;
      cnt++;
    }
    // queue 에서 0번 요소보다 큰 요소 이전까지의 갯수 반환
    result.push(cnt);

    // 큐에서 count만큼 pop
    for (let i = 0; i < cnt; i++) {
      queue.pop();
    };

  }

  return result;
}

console.log("⚙️  file: 16.js:11  solution(progresses, speeds)", solution(progresses, speeds))
