function solution(s) {
    var answer = '';
    
    const splitEmpty = s.split(' ');
   
    for(let i=0; i<splitEmpty.length; i++) {
        for(let j=0; j<splitEmpty[i].length; j++) {
            if(j%2 === 0) {
                answer += splitEmpty[i][j].toUpperCase();
            } else {
                // 일반 단어를 넣어줘도 될거라 생각했지만 lowerCase로 만들어줘야 할 듯 하다.
                // answer += splitEmpty[i][j];
                answer += splitEmpty[i][j].toLowerCase();
            }
        }
        // 최종적으로 단어의 idx를 결정하는 것은 i이니, i를 기준으로 단어를 끊어낸다.
        if(i<splitEmpty.length-1) {
            answer += ' ';
        }
    }
    console.log(answer)
    return answer;
}