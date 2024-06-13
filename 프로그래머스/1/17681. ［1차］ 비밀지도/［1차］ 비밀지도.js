function solution(n, arr1, arr2) {
    const answer = [];
    
    for(let i=0; i<n; i++) {
        const lineArray = [];
        const binary = (arr1[i] | arr2[i]).toString(2);
        
        for(let j=binary.length-n; j<binary.length; j++) {
            if(binary[j] === '1') {
                lineArray.push('#');
            } else {
                lineArray.push(' ');
            }
        }
        answer.push(lineArray.join(''))
    }
    console.log(answer)
    return answer;
}