/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let h = grid.length,
        w = grid[0].length;

    let dp = Array.from(Array(h), () => Array(w).fill(0));
    dp[0][0] = grid[0][0];

    for (let y = 0; y < h; ++y) {
        for (let x = 0; x < w; ++x) {
            if (y === 0 && x === 0) continue;
            let up = (y - 1 >= 0) ? dp[y - 1][x] : Number.MAX_VALUE;
            let left = (x - 1 >= 0) ? dp[y][x - 1] : Number.MAX_VALUE;
            dp[y][x] = Math.min(up, left) + grid[y][x];
        }
    }

    return dp[h - 1][w - 1];
};

minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]);

/**
 * Similar to 62. Unique Paths, dp question
 */