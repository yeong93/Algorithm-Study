function solution(nums) {
    let arr = [...new Set(nums)];

    return Math.min(arr.length, nums.length/2);
}