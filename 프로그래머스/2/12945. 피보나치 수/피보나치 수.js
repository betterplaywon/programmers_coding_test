function solution(n) {
    let fibonacciArray = [0,1];
    for(let i=2; i<=n; i++) {
        fibonacciArray[i] = (fibonacciArray[i-1] + fibonacciArray[i-2]) % 1234567;
    }
    return fibonacciArray[n] ;
}