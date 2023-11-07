function solution(ingredient) {
    var answer = 0;
    // 1231 순서로 ingredient 배열에서 빼고, count를 증가시키면 된다.
    const arr = [];
    let count = 0;
    
    for(let i=0; i<ingredient.length; i++) {
       arr.push(ingredient[i]);
        if(arr.length >= 4 && ingredient[i] === 1){
            const isStep = arr.slice(-4).join('');
            if(isStep === '1231') {
                arr.splice(arr.length-4,arr.length)
                count+=1;
            }
        }
    }
    return count;
}