
class Queue {
  items = [];
  front = 0;
  rear = 0;

  first() {
    return this.items[this.front];
  }

  last() {
    return this.items[this.rear];
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }

}

function solution() {
  let result;


  return result;
}

console.log(solution());