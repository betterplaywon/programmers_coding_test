function solution(participant, completion) {
    // 랜덤한 단어 배치로 testcase 2 fail. sorting 필요
    participant.sort();
    completion.sort();
    let answer = '';
    completion[participant.length] = 'empty';
    
    for(let i=0; i<participant.length; i++) {
        if(participant[i] !== completion[i]) return answer = participant[i];
    }
    
    return answer;
}