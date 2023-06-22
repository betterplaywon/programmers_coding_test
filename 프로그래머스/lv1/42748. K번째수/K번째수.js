function solution(array, commands) {
    var answer = [];
    
    // commands의 [0],[1]의 범위만큼 array를 잘라낸다.
    // 잘라낸 array에서 commands의 [2]와 비교하고, 매칭되는 idx를 리턴한다.
    
    for(let i=0; i<commands.length; i++) {
        const value = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b)=> a-b);
      /*   const sorting = value.sort((a,b)=> a-b); */
       console.log('val',value)
       /* console.log('sorting',sorting) */
       console.log('answer',answer)
       answer.push(value[commands[i][2]-1])
    }
    console.log('answer',answer)
    
    return answer;
}

// console.log(solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]));