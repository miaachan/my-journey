/* 
        5kyu - The Clockwise Spiral.js
        https://www.codewars.com/kata/the-clockwise-spiral/train/javascript

        向右 > 下 > 左 > 上
        Right > Down > Left > Up

*/
const { performance } = require('perf_hooks');

function createSpiral(N) {
    N = (Number.isInteger(N)) ? N : 0;
    let spiral = new Array(N).fill(0).map(() => new Array(N).fill(0));

    let i = 1, index = 0, row = 0, dir = 'R';
    while (i <= N * N) {
        while (dir == 'R') {
            if (index < N && spiral[row][index] == 0) {
                spiral[row][index] = i;
                i++;
                index++;
            } else {
                dir = 'D';
                index = spiral[row].lastIndexOf(i - 1);
                row++;
            }
        }
        while (dir == 'D') {
            if (row < N && spiral[row][index] == 0) {
                spiral[row][index] = i;
                i++;
                row++;
            } else {
                dir = 'L';
                row--;
                index--;
            }
        }
        while (dir == 'L') {
            if (index >= 0 && spiral[row][index] == 0) {
                spiral[row][index] = i;
                i++;
                index--;
            } else {
                dir = 'U';
                index = spiral[row].indexOf(i - 1);
                row--;
            }
        }
        while (dir == 'U') {
            if (row >= 0 && spiral[row][index] == 0) {
                spiral[row][index] = i;
                i++;
                row--;
            } else {
                dir = 'R';
                index++;
                row++;
            }
        }
    }
    return spiral
}

let t0 = performance.now();
let res = createSpiral(10)
let t1 = performance.now();
console.log(res)
console.log("It takes " + (t1 - t0).toFixed(3) + " milliseconds.");