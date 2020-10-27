/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    let sum = nums.reduce((sum, cur) => sum + cur);

    let dp = Array.from(Array(nums.length + 1), () =>
        Array(sum + 1).fill(false)
    );


    // can pick or not-to-pick
    for (let i = 0; i <= nums.length; ++i) {
        dp[i][0] = true;
    }




};

// checkSubarraySum([23, 2, 6, 4, 7], 6);
