function solution(n)
{
    let usageBattery = 0;
    
    while(n>0) {
        if(n%2 === 0) {
            n=n/2;
        } else {
            n=n-1;
            usageBattery+=1;
        }
    }
    console.log({usageBattery});
}