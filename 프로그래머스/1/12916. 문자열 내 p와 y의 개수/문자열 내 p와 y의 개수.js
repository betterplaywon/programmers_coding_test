function solution(s){
    const lowerCase = s.toLowerCase();
    const filterP = lowerCase.split('').filter((char) => char === 'p');
    const filterY = lowerCase.split('').filter((char) => char === 'y');
    
    return filterP.length === filterY.length;
}