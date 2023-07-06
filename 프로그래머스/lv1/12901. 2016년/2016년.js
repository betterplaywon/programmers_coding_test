function solution(a, b) {
      
    // new date 객체를 활용?
    const  date = new Date(2016, a-1, b);
    // console.log(typeof date);
    const result = date.toString().slice(0,3).toUpperCase();
    
    return result;
}