function solution(nums) {
    // 폰켓몬의 중복을 제외한 최대의 폰켓못 수를 구하면 된다.
    // 폰켓몬의 nums는 배열이고, nums[?]가 중복되면 하나만 있는 것으로 처리 후
    //length를 구하면 되는 듯 하다.
    // Set으로 처리하고, N/2랑 비교?
    var answer = 0;
    const set = new Set(nums).size;
    const phoneketmonLength = nums.length / 2;
    
    answer = set > phoneketmonLength ? phoneketmonLength : set;
    

    return answer;
}