function solution(answers) {
    var answer = [];
    const giveUp01 = [1,2,3,4,5];
    const giveUp02 = [2,1,2,3,2,4,2,5];
    const giveUp03 = [3,3,1,1,2,2,4,4,5,5];
    
    let count01 = 0, count02=0,count03=0;
    
    for(let i=0; i<answers.length; i++) {
         if(answers[i] === giveUp01[i%giveUp01.length]) {
            count01++;
        }
         if(answers[i] === giveUp02[i%giveUp02.length]) {
            count02++;
        }
        if(answers[i] === giveUp03[i%giveUp03.length]) {
            count03++;
        }
    }
    
    const max = Math.max(count01,count02,count03);

    if(max === count01) answer.push(1);
    if(max === count02) answer.push(2);
    if(max === count03) answer.push(3);

    return answer;
}