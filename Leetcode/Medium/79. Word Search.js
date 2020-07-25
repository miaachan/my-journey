/**
 * Time Complexity:
 * searching: O(4^l), l = board.length, four directions searching
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let h = board.length,
        w = board[0].length;
    for (let y = 0; y < h; ++y) {
        for (let x = 0; x < w; ++x) {
            if (search(x, y, 0)) return true;
        }
    }
    return false;

    function search(x, y, index) {
        // Check if out of bounds
        if (x >= w || x < 0 || y >= h || y < 0) return false;
        // If the char doesnt match, return false
        if (board[y][x] !== word[index]) return false;
        if (index === word.length - 1) return true

        // Prevent revisit, temporarily replace the value of board[y][x].
        let cur = board[y][x];
        board[y][x] = 0;

        // UP,DOWN,LEFT,RIGHT
        let hit = search(x, y + 1, index + 1) || search(x, y - 1, index + 1) || search(x - 1, y, index + 1) || search(x + 1, y, index + 1);
        board[y][x] = cur;

        return hit;
    }
};

exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED");

// This input will trigger revisit
exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB")
