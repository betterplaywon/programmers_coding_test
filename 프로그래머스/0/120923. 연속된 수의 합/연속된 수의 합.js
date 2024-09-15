function solution(num, total) {
    const exceptionSum = num*(num-1)/2;
    const start = (total - exceptionSum) / num;
    const output = [];
    
    for(let i=0; i<num; i++) {
        output.push(i+start);
    }
    return output;
}