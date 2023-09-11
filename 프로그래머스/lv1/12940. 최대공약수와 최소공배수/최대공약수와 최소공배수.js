function solution(n, m) {

var answer;
   let min = Math.min(n,m);
    let max = Math.max(n,m);
    
    for(let i = min; i>=1; i--) {
        if(min % i === 0 && max % i === 0) {
            return [i, min*max/i];
        }
    }
    return answer;
}