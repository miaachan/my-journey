/**
 * @param {character[][]} grid
 * @return {number}
 */

//  Time: O(mn)
// Space: O(mn), if each function call of recursive algorithm takes O(m) space and if the maximum depth of recursion tree is 'n' then space complexity of recursive algorithm would be O(nm).
var numIslands = function (grid) {
    let ans = 0;
    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[0].length; ++j) {
            if (grid[i][j] === "1") {
                ans += 1;
                detectEdge(i, j);
            }
        }
    }
    return ans;

    function detectEdge(y, x) {
        if (
            y < 0 ||
            x < 0 ||
            y >= grid.length ||
            x >= grid[0].length ||
            grid[y][x] === "0"
        )
            return;
        grid[y][x] = "0";
        detectEdge(y, x + 1);
        detectEdge(y, x - 1);
        detectEdge(y - 1, x);
        detectEdge(y + 1, x);
    }
};

numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
]);

numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
]);
