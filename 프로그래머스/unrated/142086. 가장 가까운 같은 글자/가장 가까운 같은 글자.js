function solution(s) {
    var answer = [];
    let words = [];
    
    // answer.includes(string[i]) 했을 때, 포함이 된다면 현재 i의 idx를, 포함 안되면 -1
   for(let i=0; i<s.length; i++) {
    const isIncludesWord = words.includes(s[i]);
    const isIndex = words.lastIndexOf(s[i]);
       
       if(isIncludesWord) {
           answer.push(words.length - isIndex);
           words.push(s[i]);
       } else {
           answer.push(-1);
           words.push(s[i]);
       }
   }
    return answer;
}