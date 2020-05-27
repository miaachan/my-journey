/*  Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

    Find all the elements of [1, n] inclusive that do not appear in this array.

    Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

    Example:

    Input:
    [4,3,2,7,8,2,3,1]

    Output:
    [5,6]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function (nums) {
    let set = new Set(nums);
    let res = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) res.push(i);
    }
    return res;
};

/* 
// a genius sol from https://www.youtube.com/watch?v=CTBEcmzLAuA

var findDisappearedNumbers = function (nums) {
    let missingNums = [];
    for (let i = 0; i < nums.length; i++) {
        let j = Math.abs(nums[i]) - 1;
        nums[j] = Math.abs(nums[j]) * -1;

    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) missingNums.push(i + 1);
    }

    return missingNums;
}; */


findDisappearedNumbers([2, 5, 3, 1, 1])
