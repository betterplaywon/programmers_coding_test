function solution(board, moves) {
    let count=0;
    const basket = [];
    
    const catchDolls = (column) => {
        for(let i=0; i<board.length; i++) {
            if(board[i][column] !== 0) {
                const doll = board[i][column];
                board[i][column] = 0;
                return doll;
            }
        }
        return 0;
    }
    
    for(const move of moves){
        const column = move-1;
        const doll = catchDolls(column);
        
        if(doll !== 0) {
            if(basket.length > 0 && basket[basket.length-1] === doll) {
                basket.pop();
                count+=2;
            } else {
                basket.push(doll);
            }
        }
    }
    return count;
}