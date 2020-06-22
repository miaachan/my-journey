/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        // Since it is sorted, nums[i] is no way greater than 0
        if (nums[i] > 0) break;
        // base number cannot be the same as previous one
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let sum = 0 - nums[i];
        // Two pointers
        let left = i + 1,
            right = nums.length - 1;

        while (left < right) {
            let curSum = nums[left] + nums[right];
            if (curSum === sum) {
                result.push([nums[i], nums[left++], nums[right--]]);
                // similar to the base one, left & right pointers' value can not be the same as previous one
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            }
            else if (curSum > sum) right--;
            else left++;
        }
    }
    return result;
};
threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]);
threeSum([0, 0, 0]);
threeSum([0, 0, 0, 0]);
threeSum([-1, 0, 1, 2, -1, -4]);