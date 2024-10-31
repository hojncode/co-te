/*
  a = ( 
  b = )

  arr = []

  arr.push()
*/


function solution(args) {
  const stack = [];

  for (const arg of args) {
    if (arg === "(") {
      stack.push(arg);
    } else if (arg === ")") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}