/*
 * @lc app=leetcode id=694 lang=typescript
 *
 * [694] Number of Distinct Islands
 */

// @lc code=start

type Point = [number, number];

function numDistinctIslands(grid: number[][]): number {
    let distinct = new Set<string>();

    for (let y = 0; y < grid.length; ++y) {
        for (let x = 0; x < grid[0].length; ++x) {
            // for the first notch we found, we calculate its offset to 0,0
            if (grid[y][x] === 1) {
                let land: Point[] = [];
                discovery(land, x, y, [x, y]);
                distinct.add(land.toString());
            }
        }
    }
    return distinct.size;

    function discovery(land: Point[], x: number, y: number, offset: Point) {
        if (x >= grid[0].length || x < 0) return;
        if (y >= grid.length || y < 0) return;
        if (grid[y][x] === 0) return;

        grid[y][x] = 0;
        land.push([x - offset[0], y - offset[1]]);

        discovery(land, x + 1, y, offset);
        discovery(land, x - 1, y, offset);
        discovery(land, x, y + 1, offset);
        discovery(land, x, y - 1, offset);
    }
}
// @lc code=end

numDistinctIslands([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
]);
