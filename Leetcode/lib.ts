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

// TODO: Too many things...
export class Heap {
    private _heap = [];

    protected parent_indx = (n): number => Math.floor((n - 1) / 2);
    protected left_child_indx = (n: number): number => 2 * n + 1;
    protected right_child_indx = (n: number): number => 2 * n + 2;
    protected swap = (a, b): void => {
        [this._heap[a], this._heap[b]] = [this._heap[b], this._heap[a]];
    };
    get size() {
        return this._heap.length;
    }

    bubble_up() {
        let index = this._heap.length - 1;
        while (index > 0) {
            let parent_index = this.parent_indx(index);
            if (this._heap[index] > this._heap[parent_index]) {
                this.swap(index, parent_index);
                index = parent_index;
                continue;
            }
            break;
        }
    }

    // adjust element after popping the max value
    bubble_down() {
        let parent_index = 0;
        while (true) {
            let parent: number = this._heap[parent_index];
            let left_index = this.left_child_indx(parent_index);
            let right_index = this.right_child_indx(parent_index);

            let left_child = this._heap[left_index];
            let right_child = this._heap[right_index];

            let to_be_swap = undefined;

            // if there is any child that > parent; swap(child, parent)
            // if both left & right are greater than parent, pick the greatest one.
            // pick right if right > left; otherwise, pick left.
            if (left_child && left_child > parent) to_be_swap = left_index;
            if (right_child && right_child > parent && right_child > left_child)
                to_be_swap = right_index;

            // No children are greater than the parent, mission completed.
            if (!to_be_swap) break;
            this.swap(parent_index, to_be_swap);
            parent_index = to_be_swap;
        }
    }

    peek(): number | undefined {
        return this._heap[0];
    }

    pop(): void {
        this.swap(0, this.size - 1);
        let pop_value = this._heap.pop();
        this.bubble_down();
        return pop_value;
    }

    insert(node): void {
        this._heap.push(node);
        this.bubble_up();
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
