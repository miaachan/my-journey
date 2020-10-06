/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let sumNums = nums.reduce((sum, val) => sum + val);
    if (sumNums % 2) return false;
    let target = sumNums / 2;

    // If we found target => The array can be partitioned
    let dp = Array.from(Array(nums.length), () => Array(sumNums).fill(false));

    for (let i = 0; i < dp.length; ++i) {}
};

canPartition([1, 5, 11, 5]);
