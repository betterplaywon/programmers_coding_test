function solution(n) {
    
    const convert3 = n.toString(3).split('').reverse().join('')
    const convert10 = parseInt(convert3, 3);
    // console.log(convert10)
    return convert10;
}