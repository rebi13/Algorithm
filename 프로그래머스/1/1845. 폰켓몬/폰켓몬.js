function solution(nums) {
    const n = nums.length;
    const set = [...new Set(nums)].length;
    return n >= set ? n / 2 > set ? set : n / 2 : set;
}