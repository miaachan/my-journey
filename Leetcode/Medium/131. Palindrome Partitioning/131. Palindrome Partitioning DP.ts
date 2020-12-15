/*
 * @lc app=leetcode id=131 lang=typescript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
function partition(s: string): string[][] {
    let res: string[][] = [];

    // dp[l][r]; memorize if `l...r` is a valid palindrome
    let dp: boolean[][] = Array.from(Array(s.length), () =>
        Array(s.length).fill(false)
    );

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
            // for substring.length >= 4, we check the dp[]
            console.log(`Looking dp[${l + 1}][${r - 1}], ${r - l}`);
            if (s[l] === s[r] && (r - l <= 2 || dp[l + 1][r - 1])) {
                console.log(`SET dp[${l}][${r}]\n`);

                dp[l][r] = true;
                cur.push(s.slice(l, r + 1));
                helper(s, cur, r + 1);
                cur.pop();
            }
        }
    }
}
// @lc code=end
partition("abbab");

console.log("aj".slice(1, 0));
