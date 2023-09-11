function solution(sizes) {    
    let widthArr = [];
    let heightArr = [];
    
    for(let i=0; i<sizes.length; i++) {
        if(sizes[i][0] > sizes[i][1]) {
            widthArr.push(sizes[i][0]);
            heightArr.push(sizes[i][1]);
        } else {
            widthArr.push(sizes[i][1]);
            heightArr.push(sizes[i][0]);
        }
    }

    const maxWidth = Math.max(...widthArr);
    const maxHeight = Math.max(...heightArr);
    const answer = maxWidth * maxHeight;
    
    return answer;
}