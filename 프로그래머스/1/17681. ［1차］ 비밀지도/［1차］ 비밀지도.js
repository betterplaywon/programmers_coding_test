function solution(n, arr1, arr2) {
    var answer = [];
    
    // arr1, arr2의 요소를 순회하며 2진법으로 변환하고
    // 변환한 것을 다시 순회하며 체크
    
    for(let i=0; i<n; i++) {
        const binary = (arr1[i] | arr2[i]).toString(2);
        const arr = [];
        for(let j=binary.length-n; j<binary.length; j++){
            if(binary[j] === '1'){
                arr.push('#')
            } else {
                arr.push(' ');
            }
        }
        answer.push(arr.join(''));
    }
    return answer;
}