/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let _dummy = new ListNode();
    let l3 = _dummy;
    let carry = 0;

    while (l1 != null || l2 != null) {
        let _l1 = (l1) ? l1.val : 0;
        let _l2 = (l2) ? l2.val : 0;

        let sum = _l1 + _l2 + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10;

        let appendNode = new ListNode(digit);
        l3.next = appendNode;
        l3 = l3.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (carry) {
        let carryNode = new ListNode(carry);
        l3.next = carryNode;
    }

    return _dummy.next;
};