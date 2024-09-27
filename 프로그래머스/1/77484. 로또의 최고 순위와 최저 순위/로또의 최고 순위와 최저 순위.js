function solution(lottos, win_nums) {
    const ranking = [6,6,5,4,3,2,1];
    const correctLength = lottos.filter((num)=> win_nums.includes(num)).length;
    const hasZeroLength = lottos.filter((num)=> num === 0).length;
    
    const max = correctLength+hasZeroLength;
    return [ranking[max], ranking[correctLength]];
}