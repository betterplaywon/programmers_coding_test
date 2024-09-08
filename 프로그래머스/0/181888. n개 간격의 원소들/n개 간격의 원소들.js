function solution(num_list, n) {
    const output = [];
    for(let i=0; i<num_list.length; i++) {
        if(i%n===0) output.push(num_list[i]);
    }
    return output;
}