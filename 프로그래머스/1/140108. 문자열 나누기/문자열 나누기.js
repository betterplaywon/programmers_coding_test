function solution(s) {
    let compareArr = [];
    let count = 0;
    
    for(let i = 0; i < s.length; i ++){
        compareArr.push(s[i]);
        
        const same = compareArr.filter((item) => item === compareArr[0]); 
        const notSame = compareArr.filter((item) => item !== compareArr[0]);
        if(same.length === notSame.length){
            count += 1;
            compareArr = [];
        }
    }
    
    if(compareArr.length !== 0){ 
        count += 1;
    }
    
    return count;
}