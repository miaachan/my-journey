/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/* 
   Two pointer method
   Time complexity : O(m+n)
   Space complexity : O(1)
*/
var getIntersectionNode = function (headA, headB) {
    let ptrA = headA,
        ptrB = headB;

    while (ptrA != ptrB) {
        ptrA = (ptrA) ? ptrA.next : headB;
        ptrB = (ptrB) ? ptrB.next : headA;
    }
    return ptrA;
};


/*
    Time complexity : O(m+n)
    Space complexity : O(m) or O(n).

var getIntersectionNode = function (headA, headB) {
    let set = new Set();
    while (headA || headB) {
        if (headA == headB) {
            return headA;
        }
        if (set.has(headA)) {
            return headA;
        } else if (set.has(headB)) {
            return headB;
        }
        else {
            if (headA) set.add(headA);
            if (headB) set.add(headB);
        }
        headA = (headA) ? headA.next : null;
        headB = (headB) ? headB.next : null;
    }
    return null;
};
*/