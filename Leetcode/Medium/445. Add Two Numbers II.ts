import { ListNode, ListNodeBuilder } from "../lib";

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    if (l1?.val === 0 && l2.val === 0) return new ListNode(0);

    let l1nums = [],
        l2nums = [];

    while (l1 !== null) {
        l1nums.push(l1.val);
        l1 = l1.next;
    }
    while (l2 !== null) {
        l2nums.push(l2.val);
        l2 = l2.next;
    }

    let dummy: ListNode = new ListNode(0);
    let tail = dummy;

    let carry = 0;
    console.log(l1nums.length, l2nums.length);
    while (l1nums.length || l2nums.length || carry) {
        let digit = (l1nums.pop() ?? 0) + (l2nums.pop() ?? 0);
        if (carry) ++digit;
        if (digit >= 10) {
            carry = 1;
            digit = digit - 10;
        } else carry = 0;

        tail.next = new ListNode(digit);
        tail = tail.next;
    }

    // let sum = l1nums + l2nums;

    // let dummy: ListNode = new ListNode(0);
    // let tail = dummy;

    // while (sum) {
    //     tail.next = new ListNode(sum % 10);
    //     tail = tail.next;
    //     sum = Math.floor(sum / 10);
    // }

    let prev = null;
    let cur = dummy.next;
    while (cur) {
        let nextTmp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nextTmp;
    }

    return prev;
    // return null;
}

addTwoNumbers(ListNodeBuilder([7, 2, 4, 3]), ListNodeBuilder([5, 6, 4]));
