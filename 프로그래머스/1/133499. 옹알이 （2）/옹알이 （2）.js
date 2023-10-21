function solution(babbling) {
  const correct = ['aya','ye','woo','ma'];
    let answer = 0;
    
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i];
        
        for(let j = 0; j < correct.length; j++){
            if(babble.includes(correct[j].repeat(2))){
                break;
            }
            babble = babble.split(correct[j]).join(" ");
        }
        
        if(babble.split(" ").join("").length === 0){
            answer += 1;
        }
    }
    
    return answer;
}