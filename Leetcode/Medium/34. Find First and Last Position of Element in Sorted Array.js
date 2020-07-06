/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    /* 
    Binary search > dynamic expand from center?
    */
    let start = 0,
        end = nums.length - 1,
        ans = [-1, -1];
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            let l = mid, r = mid;
            ans = [mid, mid];
            while (nums[++r] === target) ans[1]++;
            while (nums[--l] === target) ans[0]--;
            return ans;
        }
        if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return ans;
};

console.log(
    searchRange([1, 2], 2),
    searchRange([5, 7, 7, 8, 8, 10], 8),
    searchRange([5, 7, 7, 8, 8, 10], 6)
)


/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]


Constraints:

0 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
nums is a non decreasing array.
-10^9 <= target <= 10^9
*/