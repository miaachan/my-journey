function maximalSquare(matrix: string[][]): number {
    if (matrix.length === 0) return 0;
    // Check diagonal
    let maxSquare = 0;
    let rows = matrix.length;
    let cols = matrix[0].length;

    let curRow = 0;
    let curCol = 0;
    while (curRow < rows) {
        if (matrix[curRow][curCol] === "1") {
            let tbRow = curRow + 1;
            let tbCol = curCol + 1;
            let curSquareSize = 1;
            while (
                tbRow < rows &&
                tbCol < cols &&
                matrix[tbRow][tbCol] === "1"
            ) {
                // possibly a square, check vertical & horizontal (curSquareSize)

                if (
                    dfs(true, curSquareSize, tbRow, tbCol) &&
                    dfs(false, curSquareSize, tbRow, tbCol)
                ) {
                    tbRow++;
                    tbCol++;
                    curSquareSize++;
                } else break;
            }
            maxSquare = Math.max(maxSquare, curSquareSize);
        }
        if (curCol < cols) {
            ++curCol;
        } else {
            curCol = 0;
            ++curRow;
        }
    }
    // console.log(maxSquare**2)

    function dfs(vertical: boolean, distance: number, curRow, curCol): boolean {
        if (distance === 0) return true;
        if (vertical) {
            if (matrix[curRow - distance][curCol] === "0") return false;
        } else if (matrix[curRow][curCol - distance] === "0") return false;
        return dfs(vertical, --distance, curRow, curCol);
    }

    return maxSquare**2;
}

maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
]);

maximalSquare([
    ["1", "0", "1", "1", "1"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "1"],
]);
