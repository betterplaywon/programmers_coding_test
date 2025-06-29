function solution(s) {
    let binaryCount = 0, eliminateZeroCount = 0;
      
    while(s !== "1") {
        let zeroCount=0;
        for(let i=0; i<s.length; i++) {
            if(s[i] === '0') zeroCount++;
        }
        eliminateZeroCount+=zeroCount;
        const onlyOneLength = s.length - zeroCount;
        s = onlyOneLength.toString(2);
        binaryCount++;
    }
   return [binaryCount,eliminateZeroCount];
}