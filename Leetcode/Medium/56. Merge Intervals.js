/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length === 0) return [];

    // Sort by starting time
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [[intervals[0][0], intervals[0][1]]];

    for (let i = 1; i < intervals.length; i++) {
        // If cur'end' is greater than the next'start', pick the largest to be new'End'
        if (res[res.length - 1][1] >= intervals[i][0]) {
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1])
        } else {
            // If new'start' is larger than cur'end', assign a new interval
            res.push([intervals[i][0], intervals[i][1]])
        }
    }
    return res;
};

let result = merge([[1, 3], [2, 6], [8, 10], [15, 18]]);
console.log(result);