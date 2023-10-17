function solution(N, stages) {
    let answer = [];
    let user = stages.length;
    
    for(let i=1; i<=N; i++) {
     let fail = stages.filter((stage)=> stage === i).length;
        answer.push([i, fail/user]);
        user -= fail;
    }
    
    answer.sort((a,b)=>b[1]-a[1]);
    const result = answer.map((rate) => rate[0]);
    return result;
}