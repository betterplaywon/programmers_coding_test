function solution(t, p) {
    // p의 length 만큼 t 문자열을 나눈다.
    // p와 t를 비교하며 p보다 작은 숫자를 배열에 추가한다.
    // 배열의 length를 return한다.
    const length = t.length-p.length;
    let result = [];
    
    for(let i=0; i<=length; i++) {
        const splitNum = t.substr(i,p.length);
        if(Number(splitNum) <= Number(p)) {
            result.push(splitNum);
        }
    }    
    return result.length;
}