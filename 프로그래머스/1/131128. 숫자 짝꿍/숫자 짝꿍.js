function solution(X, Y) {
    let answer = '';
    const x = X.split('');
    const y = Y.split('');
  
    for(let i=0; i<10; i++) { // '5525', '1255'
        const xLength = x.filter((v)=> Number(v) === i).length;// 0,0,1,0,0,3,0,0,0,0
        const yLength = y.filter((v)=> Number(v) === i).length;// 0,1,1,0,0,2,0,0,0,0
        answer+= String(i).repeat(Math.min(xLength,yLength));
    }
  
    if(answer === '') return '-1';
    if(Number(answer) === 0) return '0';
    const result = answer.split('').reverse().join('');
    
    return result;
}