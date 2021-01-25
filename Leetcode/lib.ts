import { performance } from "perf_hooks";

export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }

    /**
     * Turn a group of numbers to ListNode object.
     * @param nodes leetcode testcase
     */
    static ListNodeBuilder(nodes: number[]): ListNode {
        let dHead = new ListNode(0);
        let tail = dHead;
        nodes.forEach((value) => {
            tail.next = new ListNode(value);
            tail = tail.next;
        });
        return dHead.next;
    }

    static print(node: ListNode): void {
        let str = "";
        while (node) {
            str += `${node.val} -> `;
            node = node.next;
        }
        console.log(str + "NULL");
    }
}

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }

    /**
     * Turn a group of numbers to TreeNode object.
     * @param nodes leetcode_testcase
     */
    static TreeNodeBuilder(nodes: number[]): TreeNode {
        let root = new TreeNode(nodes.shift());
        let queue: (TreeNode | null)[] = [root];

        while (queue.length > 0) {
            let cur = queue.shift();
            if (cur) {
                let left = nodes.shift();
                let right = nodes.shift();
                if (left) cur.left = new TreeNode(left);
                if (right) cur.right = new TreeNode(right);
                queue.push(cur.left, cur.right);
            }
        }
        return root;
    }
}

export namespace Utils {
    export function perfMeasure(fn: Function, ...params: any[]) {
        let t0 = performance.now();
        let result = fn(...params);
        let t1 = performance.now();
        console.log("Result: ", result);
        console.log("It takes " + (t1 - t0).toFixed(3) + " milliseconds.");
    }
}
