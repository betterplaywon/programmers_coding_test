function solution(arr)
{
  const output = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== arr[i+1]) {
            output.push(arr[i]);
        }
    }
    return output;
}