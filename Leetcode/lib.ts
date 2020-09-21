class PriorityQueue {
    constructor() {}

    parent = (i) => ((i + 1) >>> 1) - 1; // Math.floor((index - 1) / 2)
    left = (i) => (i << 1) + 1; // i * 2 + 1
    right = (i) => (i + 1) << 1; // i * 2 + 2
}

let minHeap = new PriorityQueue();
