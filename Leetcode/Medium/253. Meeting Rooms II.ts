/*
 * @lc app=leetcode id=253 lang=typescript
 *
 * [253] Meeting Rooms II
 */

import { MinHeap } from "../../lib";

// @lc code=start

function minMeetingRooms(intervals: number[][]): number {
    let start = [];
    let end = [];
    for (let [s, e] of intervals) {
        start.push(s);
        end.push(e);
    }

    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);

    let end_indx = 0;
    let rooms = 0;
    for (let i = 0; i < start.length; ++i) {
        if (start[i] < end[end_indx]) rooms++;
        else end_indx++;
    }

    return rooms;
}
// @lc code=end

function heap_minMeetingRooms(intervals: number[][]): number {
    if (intervals.length <= 1) return intervals.length;

    // sort by starting time
    intervals.sort((a, b) => a[0] - b[0]);

    let heap = new MinHeap();
    let rooms = 1;

    for (let [start, end] of intervals) {
        // We have enough rooms
        if (heap.size < rooms) {
            heap.insert(end);
            continue;
        }
        // Check if a room can be free up
        if (start >= heap.peek()) {
            heap.pop();
        } else rooms++;
        heap.insert(end);
    }
    return rooms;
}
