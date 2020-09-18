/**
 * @param {number[]} T
 * @return {number[]}
 */

//  Use Stack to do O(n)
var dailyTemperatures = function (T) {
    let res = Array(T.length).fill(0);
    let stack = [];

    for (let i = 0; i < T.length; ++i) {
        while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
            let stackTop = stack.pop();
            res[stackTop] = i - stackTop;
        }
        stack.push(i);
    }
    return res;
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
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);