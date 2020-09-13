/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    /**
     * Floyd's Algorithm - used to detect cycle
     *
     * There is many ways to find the duplicate, such as using hashmap (set, need extra space).
     * But the question requires a space-complexity of O(1).
     */

    let slow = nums[0];
    let fast = nums[0];
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow === fast) break;
    }

    fast = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};

findDuplicate([1, 3, 4, 2, 2]);
