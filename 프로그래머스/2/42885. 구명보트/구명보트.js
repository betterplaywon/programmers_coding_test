// 비교가 끝난 배열의 요소를 하나씩 제거하는 것이 나을까?
// 투 포인터로 진행하는게 나으려나?

function solution(people, limit) {
    let sumOfBoats = 0;
    let leftIdx=0, rightIdx=people.length-1;
    
    people.sort((a,b) => a-b);
    
    while(leftIdx <= rightIdx) {
        if(people[leftIdx]+people[rightIdx] <= limit) {
            leftIdx++;
        }
            rightIdx--;
         sumOfBoats++;
    }
    return sumOfBoats;
}