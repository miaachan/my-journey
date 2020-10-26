/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    let max = nums.reduce((sum, cur) => sum + cur);
    let dp = Array.from(Array(nums.length), () => Array(max + 1).fill(false));
    console.log(dp.length);
    dp[1][2] = true;
    console.log(dp);
};

checkSubarraySum([23, 2, 4, 6, 7]);
