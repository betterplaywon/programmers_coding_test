function solution(arr)
{
    const output = [];
    
    arr.forEach((value,idx) => {
        if(arr[idx] !== arr[idx+1]) output.push(value);
    })
    return output;
}