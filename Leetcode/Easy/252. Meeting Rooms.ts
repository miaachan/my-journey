/*
 * @lc app=leetcode id=252 lang=typescript
 *
 * [252] Meeting Rooms
 */

// @lc code=start
function canAttendMeetings(intervals: number[][]): boolean {
    // sort by starting time
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < intervals.length; ++i) {
        // Compare with previous ending time, see if any overlap
        if (intervals[i][0] < intervals[i - 1][1]) return false;
    }
    return true;
}
// @lc code=end
