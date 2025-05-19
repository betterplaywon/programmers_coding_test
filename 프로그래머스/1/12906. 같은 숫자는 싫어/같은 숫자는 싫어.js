function solution(arr) {
    const output = [];
    const duplicatingNumber = arr.filter((currentNumber, index)=> {
        currentNumber !== arr[index+1] && output.push(currentNumber);
    });
    return output;
}