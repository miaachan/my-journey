/**
 * @param {number[]} nums
 * @return {boolean}
 */

// dp in 2d
var canPartition = function (nums) {
    let sum = nums.reduce((sum, val) => sum + val);
    if (sum % 2) return false;
    let target = sum / 2;

    // If we found target => The array can be partitioned
    let dp = Array.from(Array(nums.length + 1), () =>
        Array(target + 1).fill(false)
    );

    for (let i = 0; i < dp.length; ++i) {
        dp[i][0] = true;
    }

    for (let i = 1; i < dp.length; ++i) {
        for (let j = 1; j <= target; ++j) {
            // 0 or 1, can either pick or not-to-pick => 0/1 knapsack problem
            // j (sum to j) can be reached only if dp[i-1] ever reach `j-nums[i]`
            dp[i][j] = dp[i - 1][j];
            if (j >= nums[i]) {
                dp[i][j] = dp[i][j] || dp[i - 1][j - nums[i]];
            }
            // eject earlier
            if (j === target && dp[i][j]) return true;
        }
    }

    return false;
};

// dp in 1d
var canPartition = function (nums) {
    let sum = nums.reduce((sum, val) => sum + val);
    if (sum % 2) return false;
    let target = sum / 2;

    // If we found target => The array can be partitioned
    let dp = Array(target + 1).fill(false);
    dp[0] = true;

    for (let num of nums) {
        for (let j = target; j > 0; --j) {
            if (j >= num) {
                dp[j] = dp[j] || dp[j - num];
                if (j === target && dp[j]) return true;
            }
        }
    }

    return false;
};

canPartition([1, 5, 11, 5]);
