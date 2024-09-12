function solution(score) {
    const averagesList = score.map(([engScore,mathScore],idx)=> {
       return (engScore+mathScore)/2;
    });
    const descending = [...averagesList].sort((a,b)=> b-a);
    const output = averagesList.map((average,idx)=>{
        return descending.indexOf(average)+1;
    });
    return output;
}