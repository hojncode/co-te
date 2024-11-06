const want = ["banana", "apple", "rice", "pork", "pot"];
const number = [3, 2, 2, 2, 1];
const discount = ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"];
//result 3

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(data) {
    this.items[this.rear] = data;
    this.rear++;
  }
  pop() {
    this.items[this.front++];
  };

  size() {
    return this.rear - this.front
  }
}

// 테스트 통과 실패...
function solution(want, number, discount) {
  let answer = 0;
  let queue = new Queue();

  for (let i = 0; i < discount.length; i++) {
    queue.push(discount[i]);
  }

  // 객체화
  let obj = want.reduce((acc, crr, index, array) => {
    acc[crr] = number[index]
    return acc
  }, {})

  // while 문내 if 문 계산으로 O(n*m)
  while (queue.size() > 0) {
    const firstItem = queue.items[queue.front];

    if (obj.hasOwnProperty(firstItem) && obj[firstItem] > 0) {
      obj[firstItem] -= 1
    }
    queue.pop();

    if (Object.values(obj).every(value => value === 0)) {
      answer++;
    }

  }

  console.log("answer", answer);
  return answer;
}

solution(want, number, discount);