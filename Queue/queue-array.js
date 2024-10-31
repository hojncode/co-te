class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("empty");
      return null;
    }

    const item = this.items[this.front++];

    if (this.front === this.rear) this.clear()

    return item;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  getSize() {
    this.size = this.rear - this.front;
    console.log("size : ", this.size);
  }

  clear() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }
}

const newQueue = new Queue();

newQueue.push(100);
newQueue.push(200);
newQueue.push(300);
newQueue.pop();
// newQueue.pop();
// newQueue.pop();
// newQueue.pop();
newQueue.getSize();


console.log(newQueue);