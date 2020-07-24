/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let ans = [];
    const dfs = (n, s, cur) => {
        if (cur.length === n) {
            ans.push([...cur]);
            return;
        }

        for (let i = s; i < nums.length; ++i) {
            cur.push(nums[i]);
            dfs(n, i + 1, cur);
            cur.pop();
        }
    }

    for (let i = 0; i <= nums.length; ++i) {
        dfs(i, 0, []);
    }

    return ans;
};

subsets([1, 2, 3])