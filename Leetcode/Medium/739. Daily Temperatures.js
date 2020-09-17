/**
 * @param {number[]} T
 * @return {number[]}
 */

// Maybe we can try a 2-pointer approach. (Sliding window?)
var dailyTemperatures = function (T) {
    let ans = [];
    let lptr = 0,
        rptr = 1; // assume length > 1 first
    while (lptr < T.length) {
        // console.log(lptr, T[lptr], rptr, T[rptr]);
        if (rptr >= T.length) ans.push(0);

        if (T[rptr] > T[lptr]) {
            let flag = false;
            for (let i = lptr + 1; i < rptr; ++i) {
                if (T[i] > T[lptr]) {
                    ans.push(i - lptr);
                    flag = true;
                    break;
                }
            }

            if (!flag) ans.push(rptr - lptr);
        } else if (rptr < T.length) {
            ++rptr;
            continue;
        }
        ++lptr;
    }
    return ans;
    // console.log(ans);
};

//  Brute force solution
var dailyTemperaturesBF = function (T) {
    let ans = [];
    for (let i = 0; i < T.length; ++i) {
        let warmer = false;
        let j = i + 1;
        while (j < T.length) {
            if (T[j] > T[i]) {
                warmer = true;
                break;
            }
            ++j;
        }
        ans.push(warmer ? j - i : 0);
    }
    return ans;
};

// OUTPUT: [1, 1, 4, 2, 1, 1, 0, 0]

const { performance } = require("perf_hooks");
let t0, t1;
t0 = performance.now();
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
t1 = performance.now();
console.log("It takes " + (t1 - t0).toFixed(3) + " milliseconds.");
t0 = performance.now();

dailyTemperaturesBF([73, 74, 75, 71, 69, 72, 76, 73]);
t1 = performance.now();
console.log("It takes " + (t1 - t0).toFixed(3) + " milliseconds.");
