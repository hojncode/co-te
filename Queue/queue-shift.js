/shift 사용/

const queue = [];

queue.push(1);
queue.push(2);
queue.push(3);

let firstItem = queue.shift();
console.log(firstItem);

queue.push(4);
queue.push(5);

firstItem = queue.shift();
console.log(firstItem);

