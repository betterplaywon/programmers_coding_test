function solution(left, right) {
    var answer = 0;
    
  for(let i=left; i<=right; i++) {
      const isDivisor = Number.isInteger(Math.sqrt(i));
    isDivisor ? answer-= i : answer += i;
  }
    
    return answer;
}