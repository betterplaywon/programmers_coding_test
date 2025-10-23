function solution(n, words) {
    let result = [0, 0];
    let lastChar = words[0][words[0].length-1];
    const checkWord = new Set();
    checkWord.add(words[0]);
    
    for(let i=1; i<words.length; i++) {
        if(words[i][0] !== lastChar || checkWord.has(words[i])) {
            result[0]= (i%n)+1;
            result[1] = Math.floor((i/n)+1);
            break;
        }
        lastChar = words[i][words[i].length-1]
        checkWord.add(words[i]);
    }
   return result;
}