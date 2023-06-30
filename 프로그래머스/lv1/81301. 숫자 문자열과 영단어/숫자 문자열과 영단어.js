function solution(s) {
    var answer = s;
    
    let numTextArr = ['zero','one','two','three','four','five','six','seven','eight', 'nine'];
    
    
    for(let i=0; i<numTextArr.length; i++) {
        const splitText = answer.split(numTextArr[i]);
        answer = splitText.join(i)
    }
    return Number(answer);
}