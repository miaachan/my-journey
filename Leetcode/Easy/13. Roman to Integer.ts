/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start

const mapping = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

function romanToInt(s: string): number {
    if (s.length === 0) return 0;

    let res = mapping[s[0]];

    for (let i = 1; i < s.length; ++i) {
        let prev = s[i - 1];
        let cur = s[i];

        if (mapping[prev] < mapping[cur]) {
            res = res + mapping[cur] - 2 * mapping[prev];
        } else {
            res += mapping[cur];
        }
    }

    return res;
}
// @lc code=end
