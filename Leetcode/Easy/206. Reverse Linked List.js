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
var reverseList = function (head) {
    let prev = null;
    let cur = head;
    while (cur) {
        let nextTmp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nextTmp
    }
    return prev;
};
/*
    1->2->3->null

    nextTemp = 2
    prev: 1->null
    curr = 2->3->null

    nxtemp = 3
    cur = 2->1->null
    prev = 2->1->null
    curr = 3->null

    nxtemp = null
    cur 3->2->1->null
    prev = 3->2->1->null
    cur = null
*/
