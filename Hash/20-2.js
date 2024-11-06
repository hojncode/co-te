function solution(participant, completion) {
  var answer = [];
  var arr1 = participant.sort();
  var arr2 = completion.sort();
  for (let i = 0; i<arr1.length; i++) {
      if (arr1[i] != arr2[i]  ) {
          return arr1[i]
      } 
  }
}