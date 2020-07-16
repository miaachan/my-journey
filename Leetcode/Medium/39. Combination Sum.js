/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    // Store combinations 
    let ans = [];
    dfs(candidates, target, 0, []);
    return ans;

    function dfs(candidates, target, start, cur) {
        if (target === 0) {
            ans.push([...cur]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            // i is greater than target, no need to check the rest
            // since the candidates was sorted already.
            if (candidates[i] > target) break;
            cur.push(candidates[i]);
            // pass i (equals to start) to allows duplicates
            dfs(candidates, target - candidates[i], i, cur);
            cur.pop();
        }
    }
};

console.log(
    combinationSum([2, 3, 6, 7], 7)
)

console.log(
    combinationSum([3, 12, 9, 11, 6, 7, 8, 5, 4], 15)
)