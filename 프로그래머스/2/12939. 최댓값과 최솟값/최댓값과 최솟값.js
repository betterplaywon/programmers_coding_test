function solution(s) {
    const ascendingArray = s.split(" ").sort((a,b)=> a-b);
    return `${ascendingArray[0]} ${ascendingArray[ascendingArray.length-1]}`;
}