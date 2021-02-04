/*
 * @lc app=leetcode id=594 lang=typescript
 *
 * [594] Longest Harmonious Subsequence
 */

// @lc code=start
function _findLHS(nums: number[]): number {
    if (nums.length === 1) return 0;

    nums.sort((a, b) => a - b);
    let l_ptr = 0;
    let r_ptr = 1;

    let lhs = 0;
    while (r_ptr < nums.length) {
        let diff = Math.abs(nums[r_ptr] - nums[l_ptr]);

        if (diff > 1 && l_ptr < r_ptr) {
            l_ptr++;
            continue;
        } else if (diff === 1) {
            lhs = Math.max(lhs, r_ptr - l_ptr + 1);
        }

        r_ptr++;
    }

    return lhs;
}
// @lc code=end
