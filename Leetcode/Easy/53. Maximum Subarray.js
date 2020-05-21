/**
 * @param {number[]} nums
 * @return {number}
 */
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
};