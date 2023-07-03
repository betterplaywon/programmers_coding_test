function solution(numbers) {
    var answer = [];
    const set = new Set(answer);
    
    for(let i=0; i<numbers.length; i++) {
        for(let j=i+1; j<numbers.length; j++) {
            set.add(numbers[i]+numbers[j]);
        }
    }
    const sorting = Array.from(set).sort((a,b)=> a-b);
    return sorting;
}