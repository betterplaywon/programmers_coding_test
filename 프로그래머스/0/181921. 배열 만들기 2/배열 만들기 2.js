function solution(l, r) {
    const output = [];
    
    for(let i=l; i<=r; i++) {
        const strs = String(i).split('');
        const isIncludesStrs = strs.every((str)=> str==='5' || str==='0');
        if(isIncludesStrs) {
            output.push(i);
        }
    }
    return output.length>0 ? output : [-1];
}