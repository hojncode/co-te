class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    const removeNode = this.head;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.size--;

    return removeNode.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.head ? this.head.data : null;
  }

  getSize() {
    return this.size;
  }

}


const queue = new Queue();
queue.push(1);
queue.pop();
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.pop();
queue.pop();
queue.pop();
queue.pop();
queue.pop();
console.log('queue : ' , queue,);