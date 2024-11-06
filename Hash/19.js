const stringList = ["apple", "banana", "cherry"];
const queryList = ["banana", "kiwi", "melon", "apple"]
//return [T,F,F,T]

function getHashTable(stringList, queryList) {
  const hashTable = new Array(queryList.length).fill("F");

  for (const v of stringList) {
    for (let i = 0; i < queryList.length; i++) {
      if (queryList[i] === v) {
        hashTable[i] = "T"
      }
    }
  }

  return hashTable;

}

function solution(stringList, queryList) {
  let result;

  result = getHashTable(stringList, queryList);

  return result;
}

solution(stringList, queryList)
console.log("🚧  solution(stringList, queryList)", solution(stringList, queryList));
