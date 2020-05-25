/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let middle = locateMiddle(head);
    let reversed = reverseList(middle);

    while (reversed) {
        if (head.val != reversed.val) return false
        head = head.next;
        reversed = reversed.next;
    }
    return true;

    // fast slow pointer
    function locateMiddle(node) {
        let slow = node,
            fast = node;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;

        }
        return slow;
    };
    // Q206. reverse linked list
    function reverseList(node) {
        let prev = null;
        let cur = node;
        while (cur) {
            let nextTmp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = nextTmp
        }
        return prev;
    };
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


isPalindrome(
    new ListNode(1,
        new ListNode(2,
            new ListNode(2,
                new ListNode(1, null)
            )
        )
    )
);