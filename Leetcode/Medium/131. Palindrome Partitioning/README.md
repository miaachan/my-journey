[131. Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)

## Solution 1.
Simple Backtracking with no optimizations

Time: O(N*2^N)
```ts
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
```

## Solution 2.
Backtracking with dp to speedup a bit but overall still O(N*2^N)

```ts
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
            if (s[l] === s[r] && (r - l <= 2 || dp[l + 1][r - 1])) {
                dp[l][r] = true;
                cur.push(s.slice(l, r + 1));
                helper(s, cur, r + 1);
                cur.pop();
            }
        }
    }
}
```

### Remarks for constructing `dp` beforehand
[Java DP + DFS solution](https://leetcode.com/problems/palindrome-partitioning/discuss/41982/Java-DP-%2B-DFS-solution)
We can construct the `dp` beforehand by iterating the right boundary first.
`dp[r-1]` is already defined at the time we use.
```ts
for (let r = 0; r < s.length; ++r) {
    for (let l = 0; l <= r; ++l) {
        // for substring.length >= 4, we check the dp[]
        if (s[l] === s[r] && (r - l <= 2 || dp[r - 1][l + 1])) {
            dp[r][l] = true;
        }
    }
}
```
What if we iterate the left boundary first? The code would look like:
```ts
for (let l = 0; l < s.length; ++l) {
    for (let r = l; r < s.length; ++r) {
        // for substring.length >= 4, we check the dp[]
        if (s[l] === s[r] && (r - l <= 2 || dp[l + 1][r - 1])) {
            dp[l][r] = true;
        }
    }
}
```
`dp[l + 1][r - 1]` will always be FALSE as we have never traveled there yet.

## Solution 3.
[Reference](https://leetcode.com/problems/palindrome-partitioning/discuss/41974/My-Java-DP-only-solution-without-recursion.-O(n2))

Trade space complexity for time complexity
Time: O(2^N)
Space: O(N * 2^N)
