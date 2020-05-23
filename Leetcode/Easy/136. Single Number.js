/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            set.delete(nums[i]);
        } else {
            set.add(nums[i]);
        }
    }
    return Array.from(set)[0];
};

singleNumber([9, 9, 1, 7, 7])


/*
    To fufill the requirement
    "Your algorithm should have a linear runtime complexity.
    Could you implement it without using extra memory?"

    We need to use XOR operator
    https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

    x ^= nums[i];
*/
