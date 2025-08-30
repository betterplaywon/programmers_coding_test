function solution(s)
{
   const output = [];
    
    for(const char of s) {
        if(output.length > 0 && char === output[output.length-1]) {
            output.pop();
        } else {
            output.push(char);
        }
    };
   return output.length === 0 ? 1 : 0;
}