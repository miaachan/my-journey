import { ListNode, ListNodeBuilder } from "../lib";

function insertionSortList(head: ListNode | null): ListNode | null {
    let dummy = new ListNode(0);
    let prev = dummy;
    // need to maintain a linked-list for Backward reference
    while (head != null) {
        let temp = head.next;

        if (prev.val >= head.val) prev = dummy;
        while (prev.next !== null && prev.next.val < head.val) {
            prev = prev.next;
        }
        head.next = prev.next;
        prev.next = head;

        head = temp;
    }

    return dummy.next;
}

insertionSortList(ListNodeBuilder([4, 2, 1, 3]));
