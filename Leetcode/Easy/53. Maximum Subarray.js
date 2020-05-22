/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let dp = [];
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    }
    return Math.max(...dp);
};


/* 
    This sol gives better Runtime & Memory usuage,
    but the above sol is more clear and simple.

    var maxSubArray = function (nums) {
    let max = nums[0], start = 0;

    while (start < nums.length) {
        let sum = 0, cur = start;

        while (cur < nums.length) {
            sum += nums[cur++];
            if (sum > max) max = sum;
            if (sum < 0) {
                start = cur - 1;
                break;
            }
        }
        start++;
    }
    return max;
}; */

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
