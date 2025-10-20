function solution(k, tangerines) {
    const map = new Map();
    for(let tangerine of tangerines) {
        map.set(tangerine, map.get(tangerine) ? map.get(tangerine)+1 : 1);
    }
    const mappingArray = [...map];
    let count=0;
    mappingArray.sort((a,b)=> b[1] - a[1]);
    
    for(const element of mappingArray) {
         count++;
        if(k>element[1]) {
           k-=element[1];
        } else {
            break;
        }
    }
    return count;
}