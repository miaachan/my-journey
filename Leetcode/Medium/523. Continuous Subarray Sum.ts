function checkSubarraySum(nums: number[], k: number): boolean {
    if (nums.length < 2) return false;

    let maxSum = nums.reduce((sum, cur) => sum + cur);
    // use the maxSum to construct 2d array
    let dp = Array.from(Array(nums.length + 1), () =>
        Array(maxSum + 1).fill(false)
    );
    dp[0][0] = true;

    let runningSum = 0;
    for (let i = 0; i < nums.length; ++i) {
        runningSum += nums[i];
        dp[i + 1][nums[i]] = true;

        for (let j = nums[i]; j <= runningSum; ++j) {
            dp[i + 1][j] = dp[i][j - nums[i]] || dp[i + 1][j];
            if (dp[i + 1][j] && (j === k || j % k === 0)) {
                console.log("bingo", i, nums[i]);
                return true;
            }
        }
    }
    console.log(dp);

    return false;
}

// let res = checkSubarraySum([23, 2, 4, 6, 7], 6);
// let res = checkSubarraySum([0, 0], 0);
let res = checkSubarraySum([0, 1, 0], 0);


console.log(res);
