/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (head === null) return null;
    let slow = head;
    let fast = head;

    while (true) {
        // If null ==> No cycle
        if (!fast.next || !fast.next.next) {
            return null;
        }
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }

    // Cycle detected
    fast = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};
