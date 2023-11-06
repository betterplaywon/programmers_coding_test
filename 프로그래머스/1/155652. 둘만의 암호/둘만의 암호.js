function solution(s, skip, index) {
    let answer = '';
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    const newAlphabet = alphabet.filter((v)=> !skip.includes(v));
    
    for(let i=0; i<s.length; i++) {
       let ALPHABET_INDEX = newAlphabet.indexOf(s[i]);
        const isMaxLength = ALPHABET_INDEX + index;
        
        
   const newIdx = (idx) => {
      return idx > newAlphabet.length-1 ? newIdx(idx - newAlphabet.length) : idx;
                        }
        answer+=newAlphabet[newIdx(isMaxLength)];
    }

    return answer;
}