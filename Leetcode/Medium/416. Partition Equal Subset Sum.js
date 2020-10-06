/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let sumNums = nums.reduce((sum, val) => sum + val);
    if (sumNums % 2) return false;
    let target = sumNums / 2;

    // If we found target => The array can be partitioned
    

};

canPartition([1, 5, 11, 5]);
