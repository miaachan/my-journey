/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    /**
     * 
     */
};

let input = [3, 2, 1, 5, 6, 4];
findKthLargest(input);



/**
 * Access the min/max value: O(1)
 * Inserting an element: O(log n)
 * Removing an element: O(log n)
 */
class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }

    size() { return this._heap.length }
    isEmpty() { return this._heap.length === 0 }
    push() {}
}

const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;


console.log(parent(3))