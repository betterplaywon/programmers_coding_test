const isEmptyBracketArray = (array) => {
    return array.length === 0
}

function solution(s){
    const bracketsArr = [];
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === '(') {
            bracketsArr.push(s[i]);
            continue;
        };
        if(isEmptyBracketArray(bracketsArr)) return false;
        bracketsArr.pop();
    }
    return bracketsArr.length === 0;
}