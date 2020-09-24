/**
 * Prefix sum
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let sum = new Map();
    sum.set(0, 1);
    let runningSum = 0;
    let ans = 0;

    // Construct the hashmap
    for (let i = 0; i < nums.length; ++i) {
        if (sum.has(runningSum)) {
            sum.set(runningSum, sum.get(runningSum) + 1);
        } else sum.set(runningSum, 1);
    }

    for (let i = 0; i < nums.length; ++i) {
        runningSum += nums[i];

        if (sum.has(runningSum - k)) ans += sum.get(runningSum - k);

        // if (sum.has(runningSum)) {
        //     sum.set(runningSum, sum.get(runningSum) + 1);
        // } else sum.set(runningSum, 1);

        // console.log(runningSum, runningSum - k);
    }
    return ans;
};



// Output 4, expect 2

subarraySum([1, 1, 1], 2);
// subarraySum([1], 0)

// subarraySum([-1, -1, 1], 0);
