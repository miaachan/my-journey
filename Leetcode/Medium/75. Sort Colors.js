/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    // Two pointers, one pass
    let l = 0, r = nums.length - 1;

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === 0) {
            // swap nums[i] to leftmost
            [nums[i], nums[l]] = [nums[l], nums[i]];
            l++;
        } else if (nums[i] === 2 && i < r) {
            // swap nums[i] to rightmost, 
            // i - 1 to include checking for the swapped value.
            [nums[i], nums[r]] = [nums[r], nums[i]];
            i--;
            r--;
        }
    }

    return nums;
};

sortColors([2, 0, 2, 1, 1, 0]);