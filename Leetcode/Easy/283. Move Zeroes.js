/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let length = nums.length,
        i = nums.indexOf(0);
    while (i != -1) {
        nums.splice(i, 1);
        i = nums.indexOf(0);
    }
    for (let i = nums.length; i < length; i++) {
        nums.push(0);
    }
    console.log(nums);
};

// a better sol from leetcode
var moveZeroes = function (nums) {
    let lastNonZero = 0;

    // If the current element is not 0, then we need to
    // append it just in front of last non 0 element we found. 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[lastNonZero++] = nums[i];
        }
    }
    // After we have finished processing new elements,
    // all the non-zero elements are already at beginning of array.
    // We just need to fill remaining array with 0's.
    for (let i = lastNonZero; i < nums.length; i++) {
        nums[i] = 0;
    }
};


moveZeroes([0, 0, 1]);
// moveZeroes([1, 0, 3, 12]);