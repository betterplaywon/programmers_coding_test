// brown 8, yellow 1을 상상해보면 총합이 9인데 가운데에 노란칸 2개가 존재하려면 3 by 3 형태의 grid가 나타난다.
// brown 10, yellow 2를 상상해보면 총합이 12인데 가운데에 노란칸 2개가 존재하려면 4 by 3 형태의 grid가 나타난다.
// brown은 8 이상이다. 그 말은 height가 못해도 3부터 시작한다는 말과 같다.
// 브루트 포스로 모든 경우의 수를 비교하면 시간복잡도에서 걸릴 듯..? 비교를 줄일 수 있는 방법 필요.
// 가운데에 존재하는 노란칸을 파악하려면 어떻게 해야할까..
// (width-2) * (height-2) = yellow 규칙?

function solution(brown, yellow) {
    const sum = brown+yellow;
    
    for(let height=3; height<=Math.sqrt(sum); height++) {
        if(sum%height === 0) {
            let width = sum/height;
            
            if((width-2) * (height-2) === yellow) {
                return [width, height];
            };
        };
    };
};