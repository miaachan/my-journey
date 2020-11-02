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