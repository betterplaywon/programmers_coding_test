function solution(s, n) {
    let answer = '';
    
    const largeLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const smallLetter = "abcdefghijklmnopqrstuvwxyz";
    
    for(let i=0; i<s.length; i++) {
        const currentText = s[i];
        if(s[i] === ' ') {
            answer += ' ';
            continue;
        }
        
        const isLargeLetter = largeLetter.includes(currentText) ? largeLetter : smallLetter
        let index = isLargeLetter.indexOf(currentText) + n;
        
        if(isLargeLetter.length <= index) {
            index -= isLargeLetter.length;
        }
        answer += isLargeLetter[index];
    }
    
    return answer;
}