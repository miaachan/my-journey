/* 
        4kyu - Connect Four
        https://www.codewars.com/kata/connect-four-1/train/javascript

        7 Columns - A, B, C, D, E, F, G
        6 Rows
*/
const { performance } = require('perf_hooks');

function whoIsWinner(piecesPositionList) {
    let board = new Array(7).fill(0).map(() => []);
    for (let i = 0; i < piecesPositionList.length; i++) {
        // Convert input to the board
        let para = piecesPositionList[i].split('_');
        let column = para[0].charCodeAt(0) - 65;
        board[column].push(para[1]);

        const index = board[column].length - 1;

        // Case 1: Same column?
        if (i >= 3) {
            let count = 1;
            for (let incInd = index - 3; incInd < index; incInd++) {
                if (board[column][incInd] === para[1]) count++;
                else break;
            }
            if (count === 4) return para[1];
        }

        let count = 1, cp_column = column, cp_index;
        // Case 2: Same row. Dynamic expand to left and right back to original index and expand to right.
        if (i >= 3) {
            while (cp_column > 0) {
                if (typeof board[cp_column - 1][index] !== 'undefined') {
                    if (board[cp_column - 1][index] === para[1]) count++;
                    else break;
                } else break;
                cp_column--;
            }
            cp_column = column;
            while (cp_column < 6 && count < 4) {
                if (typeof board[cp_column + 1][index] !== 'undefined') {
                    if (board[cp_column + 1][index] === para[1]) count++;
                    else break;
                } else break;
                cp_column++;
            }

            if (count >= 4) return para[1];
        }

        // Case 3: Upper left to lower right
        if (i >= 9) {
            count = 1, cp_column = column, cp_index = index;
            while (cp_column > 0 && cp_index < 5) {
                if (typeof board[cp_column - 1][cp_index + 1] !== 'undefined') {
                    if (board[cp_column - 1][cp_index + 1] === para[1]) count++;
                    else break;
                } else break;
                cp_index++;
                cp_column--;
            }
            cp_column = column;
            cp_index = index;
            while (cp_column < 6 && cp_index > 0 && count < 4) {
                if (typeof board[cp_column + 1][cp_index - 1] !== 'undefined') {
                    if (board[cp_column + 1][cp_index - 1] === para[1]) count++;
                    else break;
                } else break;
                cp_column++;
                cp_index--;
            }
            if (count >= 4) return para[1];
        }

        // Case 4: Lower left to upper right
        if (i >= 9) {
            count = 1, cp_column = column, cp_index = index;
            while (cp_column > 0 && cp_index > 0) {
                if (typeof board[cp_column - 1][cp_index - 1] !== 'undefined') {
                    if (board[cp_column - 1][cp_index - 1] === para[1]) count++;
                    else break;
                } else break;
                cp_index--;
                cp_column--;
            }
            cp_column = column;
            cp_index = index;
            while (cp_column < 6 && cp_index < 6 && count < 4) {
                if (typeof board[cp_column + 1][cp_index + 1] !== 'undefined') {
                    if (board[cp_column + 1][cp_index + 1] === para[1]) count++;
                    else break;
                } else break;
                cp_column++;
                cp_index++;
            }
            if (count >= 4) return para[1];
        }  
    }
    return "Draw";
}

list1 = [ 'C_Yellow',
'B_Red',
'B_Yellow',
'E_Red',
'D_Yellow',
'G_Red',
'B_Yellow',
'G_Red',
'E_Yellow',
'A_Red',
'G_Yellow',
'C_Red',
'A_Yellow',
'A_Red',
'D_Yellow',
'B_Red',
'G_Yellow',
'A_Red',
'F_Yellow',
'B_Red',
'D_Yellow',
'A_Red',
'F_Yellow',
'F_Red',
'B_Yellow',
'F_Red',
'F_Yellow',
'G_Red',
'A_Yellow',
'F_Red',
'C_Yellow',
'C_Red',
'G_Yellow',
'C_Red',
'D_Yellow',
'D_Red',
'E_Yellow',
'D_Red',
'E_Yellow',
'C_Red',
'E_Yellow',
    'E_Red']

let t0 = performance.now();
whoIsWinner(list1);
let t1 = performance.now();
console.log("It takes " + (t1 - t0).toFixed(3) + " milliseconds.");