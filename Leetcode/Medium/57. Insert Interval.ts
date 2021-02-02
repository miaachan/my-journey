/*
 * @lc app=leetcode id=57 lang=typescript
 *
 * [57] Insert Interval
 */

// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
    let i = 0,
        a = 0,
        b = 0;

    let [start, end] = newInterval;

    while (i < intervals.length && intervals[i][1] < start) i++;
    a = i;

    // intervals[i][1] is now greater than newInterval_start
    while (i < intervals.length && intervals[i][0] <= end) {
        start = Math.min(start, intervals[i][0]);
        end = Math.max(end, intervals[i][1]);
        i++;
    }
    b = i;

    return [...intervals.slice(0, a), [start, end], ...intervals.slice(b)];
}
// @lc code=end
