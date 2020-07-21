/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    // (x, y) = (m, n)
    let dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
    dp[1][1] = 1;
    for (let y = 1; y <= n; ++y) {
        for (let x = 1; x <= m; ++x) {
            // dp[1][1] is already initialized
            if (x === 1 && y === 1) continue;
            // Since the robot can only move right & down,
            // so the sum of (x, y) should be (x-1, y)Left + (x, y-1)Up
            dp[y][x] = dp[y - 1][x] + dp[y][x - 1];
        }
    }

    return dp[n][m];
};

uniquePaths(3, 2);