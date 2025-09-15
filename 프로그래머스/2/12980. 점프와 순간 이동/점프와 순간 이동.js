// 무조건 한 칸은 가야한다. 그래야 순간이동 가능.
// 한 칸을 이동하면 주어진 거리에서 -1만큼 차감하고 배터리 소모량 1 추가.
// 순간이동하면 매번 거리를 2씩 곱해주는 연산보다 주어진 거리를 2씩 나눠주는 것이 나음.

function solution(n)
{
    let usingBattery=0;
    
    while(n>0) {
        if(n%2 === 0) {
            n/=2;
        } else {
            n-=1;
            usingBattery+=1;
        }
    }
    return usingBattery;
}