/*
 * @lc app=leetcode id=131 lang=typescript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
function partition(s: string): string[][] {
    let res: string[][] = [];
    helper(s, [], 0);
    return res;

    /**
     *
     * @param s string
     * @param cur valid palindromes in this moment
     * @param l left boundary
     */
    function helper(s: string, cur: string[], l: number) {
        // Goal, left is out of bound
        if (l === s.length) res.push([...cur]);

        for (let r = l; r < s.length; ++r) {
            // Recursion Constraint, O(n) work
            if (isPal(s, l, r)) {
                cur.push(s.slice(l, r + 1));
                helper(s, cur, r + 1);
                cur.pop();
            }
        }
    }

    function isPal(s: string, l: number, r: number): boolean {
        while (l <= r) {
            // given a l & r boundary, shrink it.
            if (s[l++] !== s[r--]) return false;
        }
        return true;
    }
}
// @lc code=end
