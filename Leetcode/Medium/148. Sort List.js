/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    // Merge Sort (top down); Time: O(nlogn); Space: O(logn)
    if (!head || !head.next) return head;
    let slow = head;
    let fast = head.next;

    // use fast & slow pointer to locate the middle
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let mid = slow.next;
    slow.next = null;
    return mergeList(sortList(head), sortList(mid));

    /**
     *
     * @param {ListNode} l1
     * @param {ListNode} l2
     */
    function mergeList(l1, l2) {
        let dummy = new ListNode(0);
        let tail = dummy;

        while (l1 && l2) {
            if (l1.val > l2.val) {
                // swap l1 & l2
                [l1, l2] = [l2, l1];
            }
            tail.next = l1; /* init: dummy.next = l1(最細) */
            l1 = l1.next;
            tail = tail.next; /* now tail = l1 */
        }
        // the remaining list node must be greater than the current tail, since list (1 & 2) are both sorted.
        if (l1) tail.next = l1;
        if (l2) tail.next = l2;

        return dummy.next; /* the sorted smallest node */
    }
};

let input = {
    val: 4,
    next: { val: 2, next: { val: 1, next: { val: 3, next: null } } },
};

sortList(input);

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
