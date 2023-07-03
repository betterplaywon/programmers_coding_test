function isPrimeNum(number) {
    const filterNum = Math.floor(Math.sqrt(number));
    
    for(let i = 2; i <= filterNum; i++) {
        if(number % i === 0) return false;
    }
      return true;
}

function solution(nums) {
    let result = 0;
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            for(let k = j+1; k < nums.length; k++) {
                const numsSum = nums[i] + nums[j] + nums[k];
               if(isPrimeNum(numsSum)) {
                   result++;
               }
            }
        }
    }
    
    return result;
}