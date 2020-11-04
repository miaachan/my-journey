// O(m + n)
function searchMatrix(matrix: number[][], target: number): boolean {
    if (matrix.length === 0) return false;
    // starts at the top-right corner
    let row = matrix[0].length - 1,
        col = 0;

    while (row >= 0 && col < matrix.length) {
        // console.log(m, n)
        if (matrix[col][row] === target) return true;
        if (matrix[col][row] > target) --row;
        else ++col;
    }

    return false;
}

// O(m * log(n))
// Perform binary-search on each row
function _searchMatrix(matrix: number[][], target: number): boolean {
    // TODO
    return false;
}

searchMatrix(
    [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30],
    ],
    5
);
