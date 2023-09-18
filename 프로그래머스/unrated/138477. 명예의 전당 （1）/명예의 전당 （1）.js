function solution(k, score) {
    const arr = [];
    let answer = [];
    
    // arr 배열의 길이는 k와 같다.
    // arr.length가 k와 같아질 때 까지는 arr에 score를 넣는다.
    // arr.length가 k를 초과할 땐 score와 arr 배열의 값을 비교해서
    // score가 가장 크다면 arr의 최저값을 빼고 score를 추가,
    // score가 가장 작다면 그냥 넘어간다.
    // splice 사용 시 테스트 통과 x. pop과 push를 사용한 풀이로 변경.
    
    for(let i=0; i<score.length; i++) {
        const currScore = score[i];
            if(i < k) {
                arr.push(currScore);
            }
        
           const arrOfMin = Math.min(...arr);
        
            if(currScore > arrOfMin) {
                // arr.splice(k-1,1,currScore);
                arr.pop();
                arr.push(currScore);
                arr.sort((a,b)=> b-a);
            }
        answer.push(arr[arr.length-1])
    }
       
    console.log(answer)
    return answer;
}