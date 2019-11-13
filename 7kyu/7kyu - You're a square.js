/* 
        7kyu - You're a square!
        https://www.codewars.com/kata/youre-a-square/train/javascript

*/
const { performance } = require('perf_hooks');

// var isSquare = function (n) {
//     let i = 0;
//     while (i**2 <= n) {
//         if (i ** 2 === n) return true;
//         ++i;
//     }
//     return false;
// }

var isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0;
}


let t0 = performance.now();
isSquare(25);
let t1 = performance.now();
console.log("It takes " + (t1 - t0).toFixed(3) + " milliseconds.");