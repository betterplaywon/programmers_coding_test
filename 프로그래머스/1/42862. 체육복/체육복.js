function solution(n, lost, reserve) {
    const lostStudents = lost.sort((a,b)=> a-b).filter((v)=> !reserve.includes(v));
    let reserveStudents = reserve.sort((a,b)=> a-b).filter((v)=> !lost.includes(v));
    
    const filter = lostStudents.filter((l)=> {
        const borrowStudent = reserveStudents.find((r)=> Math.abs(r-l) === 1)
        if(!borrowStudent) return lost;
        reserveStudents = reserveStudents.filter((v)=> v !== borrowStudent);
    })
    const answer = n - filter.length;
    return answer;
}