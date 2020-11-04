import { ListNode, ListNodeBuilder, Utils } from "../lib";

function _getDecimalValue(head: ListNode | null): number {
    let value = "";
    while (head !== null) {
        value += head.val;
        head = head.next;
    }
    return parseInt(value, 2);
}

function getDecimalValue(head: ListNode | null): number {
    if (!head) return 0;
    let value = head.val;
    head = head.next;
    while (head !== null) {
        value = value * 2 + head.val;
        head = head.next;
    }
    return value;
}

Utils.perfMeasure(getDecimalValue, ListNodeBuilder([1, 1, 0]));
