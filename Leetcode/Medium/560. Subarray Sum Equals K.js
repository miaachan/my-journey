/**
 * Prefix sum
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let preSum = new Map();
    preSum.set(0, 1);
    let runningSum = 0;
    let ans = 0;

    for (let num of nums) {
        runningSum += num;
        /**
         * runningSum - k = preSum
         * runningSum + preSum = k
         *
         * where runningSum & preSum are all continuous
         */
        ans += preSum.get(runningSum - k) || 0;
        preSum.set(runningSum, (preSum.get(runningSum) || 0) + 1);
    }
    return ans;
};

// subarraySum([1, 1, 1], 2);
subarraySum([1, 1, 1, 1], 2);
subarraySum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);
// subarraySum([1], 0)

// subarraySum([-1, -1, 1], 0);
