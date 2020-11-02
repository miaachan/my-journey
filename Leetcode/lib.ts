export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * Turn a group of numbers to ListNode object.
 * @param nodes leetcode testcase
 */
export function ListNodeBuilder(nodes: number[]): ListNode {
    let dHead = new ListNode(0);
    let tail = dHead;
    nodes.forEach((value) => {
        tail.next = new ListNode(value);
        tail = tail.next;
    });
    return dHead.next;
}



class PriorityQueue {
    constructor() {}

    parent = (i) => ((i + 1) >>> 1) - 1; // Math.floor((index - 1) / 2)
    left = (i) => (i << 1) + 1; // i * 2 + 1
    right = (i) => (i + 1) << 1; // i * 2 + 2
}

let minHeap = new PriorityQueue();
