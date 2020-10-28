/**
 * O(n^2) Sol using DP
 *
 * From back to front, store each traversed element's LIS
 *
 * For any j > i, if nums[j] > nums[i], compare its current LIS with memo[j] + 1, take the largest and update the current LIS.
 * Update memo[i] with the finalized LIS.
 *
 */
function lengthOfLIS(nums: number[]): number {
    let longest = 0;
    let memo = Array(nums.length);
    // init memo
    memo[nums.length - 1] = 1;

    for (let i = nums.length - 1; i >= 0; --i) {
        let localLIS = 1;

        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[j] > nums[i]) {
                localLIS = Math.max(localLIS, memo[j] + 1);
                if (memo[j] === longest) break;
            }
        }

        memo[i] = localLIS;
        longest = Math.max(longest, localLIS);
    }
    return longest;
}
