function solution(numbers, hand) {
    const left = ['1','4','7'], right = ['3','6','9'], mid = ['2','5','8','0'];
    const keypad = [['1','2','3'],['4','5','6'],['7','8','9'],['*','0','#']];
    let lThumb=[3,0], rThumb=[3,2];
    let output = '';
    
    const setPosition = (num) => {
        for(let i=0; i<keypad.length; i++) {
            const position = keypad[i].indexOf(num);
            if(position !== -1) return [i,position];
        }
        return null;
    }
    
    const selectDirection = (num) => {
        const currentPosition = setPosition(num);
        const lDistance = Math.abs(lThumb[0]-currentPosition[0])+Math.abs(lThumb[1]-currentPosition[1]);
        const rDistance = Math.abs(rThumb[0]-currentPosition[0])+Math.abs(rThumb[1]-currentPosition[1]);
        
        if(lDistance < rDistance) {
            output+='L';
            lThumb=currentPosition;
        } else if(rDistance < lDistance){
            output+='R';
            rThumb=currentPosition;
        } else {
            if(hand === 'left') {
                output+='L';
                lThumb=currentPosition;
            } else {
                output+='R';
                rThumb=currentPosition;
            }
        }
    }
    
    const changeNumbersType = numbers.map(String);
    for(const num of changeNumbersType) {
        if(left.includes(num)) {
            output+='L';
            lThumb = setPosition(num);
        } else if(right.includes(num)) {
            output+='R';
            rThumb = setPosition(num);
        } else {
          selectDirection(num);
        }
    }
    return output;
}