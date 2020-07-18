/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    // First pass: mirror around diagonal
    for (let i = 0; i < matrix.length; ++i)
        for (let j = i + 1; j < matrix.length; ++j) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }

    // Second pass: mirror around y axis
    return matrix.map(v => v.reverse());
};

/**
 * Solution: 2 Passes
 * https://zxi.mytechroad.com/blog/algorithms/array/leetcode-48-rotate-image/
 * 
 */

console.log(
    rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
)