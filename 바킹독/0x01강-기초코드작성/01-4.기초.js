const n = 1024

function solution(n) {
  let value = 1;
  while (2 ** value <= n) {
    console.log("🚧 value\n", value);
    value *= 2
  }
  return value
}

console.log(solution(n));