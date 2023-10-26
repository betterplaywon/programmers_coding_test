function solution(keymap, targets) {
    const answer = [];
  
  for(let i=0; i<targets.length; i++) {
      const target = targets[i];
        let count = 0;
      for(let j=0; j<target.length; j++) {
          const targetWord = target[j];
          const keyCount = keymap.map((key,idx) => {
              const keyIdx = key.indexOf(targetWord);
              return keyIdx === -1 ? Infinity : keyIdx+1; 
          });
          const minimum = Math.min(...keyCount);
         
          if(minimum === Infinity) {
              count = -1;
              break;
          }
          count += minimum;
      }
      answer.push(count);
  }
    return answer;
}