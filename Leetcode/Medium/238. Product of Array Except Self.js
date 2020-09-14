/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let left = Array(nums.length).fill(1);
    let right = Array(nums.length).fill(1);
    let output = Array(nums.length);

    // Partition to Left & Right
    for (let i = 1; i < nums.length; ++i) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    for (let i = nums.length - 2; i >= 0; --i) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < output.length; ++i) {
        output[i] = left[i] * right[i];
    }

    return output;
};

// Space: O(1); enhanced version of the previous solution
var productExceptSelf = function (nums) {
    let output = Array(nums.length).fill(1);
    let r = 1;

    // Partition `output` to Left as before
    for (let i = 1; i < nums.length; ++i) {
        output[i] = output[i - 1] * nums[i - 1];
    }

    // r here is actually the Right like before
    for (let i = nums.length - 1; i >= 0; --i) {
        output[i] = output[i] * r;
        r = r * nums[i];
    }

    return output;
};

productExceptSelf([1, 2, 3, 4]);
