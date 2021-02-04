[594. Longest Harmonious Subsequence](https://leetcode.com/problems/longest-harmonious-subsequence/)

## Solution 1.
Sorting + Sliding Window

Time: O(N*logN)
```ts
function findLHS(nums: number[]): number {
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
```

## Solution 2.
Map + Iterate through the map to see if map.has(i + 1)

Time: O(N)