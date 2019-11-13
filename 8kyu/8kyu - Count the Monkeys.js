/* 
        8kyu - Count the Monkeys!
        https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/solutions/javascript

*/
const { performance } = require('perf_hooks');

function monkeyCount(n) {
    return Array(n).fill(0).map((v, ind) => ind + 1);
}

let t0 = performance.now();
monkeyCount(10 ** 6);
let t1 = performance.now();
console.log("It takes " + (t1 - t0).toFixed(3) + " milliseconds.");