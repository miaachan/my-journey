/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length === 1) return true;
    if (nums[0] === 0) return false;
    let dp = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] - 1);
        if (dp[i] === 0 && i + 1 !== nums.length) return false;
        if (dp[i] + i + 1 >= nums.length) return true;
    }
    return false;
};

/**
 * use dp to solve
 * dp[i] = Math.max(nums[i], dp[i-1]-1)
 * if dp[i] >= nums.length, return true.
 */


let result = canJump([0]);
console.log(result);