function solution(dartResult) {
    const arr =[];
    const regex = /(\d+)|([a-zA-Z]+)|(\W+)/g;
    const cut = dartResult.match(regex);

    cut.map((item,idx) => {
         if (item == 'S'){
            arr.push(+cut[idx-1])
        } else if (item == 'D'){
            arr.push(Math.pow(cut[idx-1],2));
        } else if (item == 'T'){
            arr.push(Math.pow(cut[idx-1],3));
        } else if (item == '*'){
            if (arr.length == 1){
                arr[arr.length-1] *= 2;
            } else{
                arr[arr.length-1] *= 2;
                arr[arr.length-2] *= 2; 
            }
        } else if (item == '#'){
            arr[arr.length-1] = -arr[arr.length-1]
        }
    })
    const result = arr.reduce((acc,cur)=> acc = acc+cur);
     
    return result;
}