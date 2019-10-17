/* 
        6 kyu - Count letters in string
        https://www.codewars.com/kata/count-letters-in-string/train/javascript

*/
const { performance } = require('perf_hooks');

function letterCount(s) {
    let result = {};
    s = s.split('');
    for (let i = 0; i < s.length; i++)
        (result.hasOwnProperty(s[i])) ? result[s[i]]++ : result[s[i]] = 1;
    return result;
}

let t0 = performance.now();
letterCount("expwovxloytlxsyac")

let t1 = performance.now();
console.log("It takes " + (t1 - t0).toFixed(3) + " milliseconds.");