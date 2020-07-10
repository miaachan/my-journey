/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    nums.sort((a, b) => a - b);
    let count = 0;

    for (let i = 2; i < nums.length; i++) {
        let left = 0, right = i - 1;

        while (left < right) {
            let sum = nums[left] + nums[right];
            if (sum > nums[i]) {
                count += right - left;
                right--;
            } else left++;
        }
    }
    return count
};

console.log(triangleNumber(
    [24, 3, 82, 22, 35, 84, 19]))