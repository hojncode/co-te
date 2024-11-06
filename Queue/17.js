/*
  카드 배열의 순서는 변경할 수 없음.

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


const card1 = ["i", "drink", "water"];
const card2 = ["want", "to"];
const goal  = ["i", "want", "to", "drink", "water"]
// result = "Yes"

// const card1 = ["i", "water", "drink"];
// const card2 = ["want", "to"];
// const goal = ["i", "want", "to", "drink", "water"]
// result = "No";

function solution(card1, card2, goal) {
  const queue_goal = new Queue();
  const queue_card1 = new Queue();
  const queue_card2 = new Queue();
  let result;

  for (let i = 0; i < goal.length; i++) {
    queue_goal.push(goal[i]);
  }

  for (let i = 0; i < card1.length; i++) {
    queue_card1.push(card1[i]);
  }

  for (let i = 0; i < card2.length; i++) {
    queue_card2.push(card2[i]);
  }

  // card 배열들도 큐로 만들어서 비교해야함
  while (queue_goal.size() > 0) {
    if (queue_goal.items[queue_goal.front] === queue_card1.items[queue_card1.front]) {
      queue_goal.pop();
      queue_card1.pop();
    }
    else if (queue_goal.items[queue_goal.front] === queue_card2.items[queue_card2.front]) {
      queue_goal.pop();
      queue_card2.pop()
    }
    else break;
  };
  
  
  // goal 의 첫 요소가 삭제되면 , card1 의 다음 요소 확인
  // card1에 없으면 card2 확인 , card2 삭제후 card1 의 다음 요소 확인
  // 하나의 요소에 연달아 없으면 나가기
  
  result = queue_goal.size() === 0 ? "Yes" : "No"
  console.log("⚙️ variable result", result);
  return result;

}
solution(card1, card2, goal);

