function solution(a, b, n) {
    let emptyBottle = n;
    let result = 0;
    
    while(emptyBottle >= a) {
    const spend = Math.floor(emptyBottle / a); // 6, 2, 1
    
        // emptyBottle = emptyBottle - (spend * b); // 10
        emptyBottle = emptyBottle - (spend * a) + (spend * b); // 8, 4, 2
        
        result += (spend * b); // 6, 2, 1
    }
    
    return result;
}