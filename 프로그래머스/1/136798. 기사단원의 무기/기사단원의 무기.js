function solution(number, limit, power) {

 const arr = [];

    const isDivisor = (num) => {
         let count = 1;
          for(let j = 1; j <= num/2; j++) { 
          if(num % j === 0) {
              count+=1;
          }
      }
        return count;
    }
    
  for(let i = 1; i <= number; i++) {
     arr.push(isDivisor(i));
  }
 
    const result = arr.reduce((acc,curr) => {
        curr > limit ? acc+=power : acc+=curr;
        return acc;
    })
    
    return result;
}