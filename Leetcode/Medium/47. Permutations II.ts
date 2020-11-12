function permuteUnique(nums: number[]): number[][] {
    let ans: number[][] = [];
    let used = Array(nums.length).fill(false);

    dfs(0, nums.length, []);
    return ans;

    function dfs(depth: number, len: number, cur: number[]) {
        if (depth === len) {
            ans.push([...cur]);
            return;
        }

        for (let i = 0; i < len; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i - 1] == nums[i] && !used[i - 1]) continue;
            used[i] = true;
            cur.push(nums[i]);
            dfs(depth + 1, len, cur);
            cur.pop();
            used[i] = false;
        }
    }
}
console.log(permuteUnique([1, 1, 2]));
