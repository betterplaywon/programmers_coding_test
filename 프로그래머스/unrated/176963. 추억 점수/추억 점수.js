function solution(name, yearning, photo) {
    var answer = [];
    // name[i]와 yearning[i]를 매칭시킨 배열 또는 객체가 필요하다.
    // 매칭된 배열or객체(이하 매칭)와 photo를 비교하며 매칭에 photo[i]가 있다면
    // answer 배열에 점수를 더한다.
    let nameScore = {};
    
    for(let i=0; i<name.length; i++) {
       nameScore[name[i]] = yearning[i];
    }

    const matching = photo.map((item)=> {
        // acc + nameScore[curr]의 연산이 먼저 이뤄져 괄호 처리
       const sumScore = item.reduce((acc,curr) => acc + (nameScore[curr] || 0),0)
        return sumScore;
    })
    // console.log(matching);
    answer = matching;
    return answer;
}