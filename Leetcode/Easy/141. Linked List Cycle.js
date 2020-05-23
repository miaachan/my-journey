/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
/* Using Floyd's Algorithm 
    3   2   0   -4
    f
            f
        h
        f   h
                f = h
*/
var hasCycle = function (head) {
    let fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        head = head.next;
        if (fast == head) return true;
    }
    return false;
};


/* Using Set

var hasCycle = function (head) {
    let set = new Set();
    while (head != null) {
        if (set.has(head)) return true;
        else set.add(head)
        head = head.next;
    }
    return false;
};

*/
