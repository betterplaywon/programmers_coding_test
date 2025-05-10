function solution(a, b) {
    if(a === b) return a;
    
    const min = Math.min(a,b);
    const max = Math.max(a,b);
    const length = (max-min)+1;
    
    return (length*(min+max)) / 2;
}