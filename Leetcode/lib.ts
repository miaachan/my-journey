import { performance } from "perf_hooks";

export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * Turn a group of numbers to ListNode object.
 * @param nodes leetcode testcase
 */
export function ListNodeBuilder(nodes: number[]): ListNode {
    let dHead = new ListNode(0);
    let tail = dHead;
    nodes.forEach((value) => {
        tail.next = new ListNode(value);
        tail = tail.next;
    });
    return dHead.next;
}


// https://github.com/gaastonsr/treevis/blob/master/tree/treeFromArray.js
export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }

    // construct the tree with array in BFS (level order)
    static TreeNodeBuilder(nodes: (number | null)[]): TreeNode {
        if (nodes.length === 0) return null;

        let root = new TreeNode(nodes[0]);
        var queue = [root];


        while(queue.length > 0 && )



        var data = [];
        while (queue.length) {
            var size = queue.length;
            var avg = 0;
            for (var i = 0; i < size; i++) {
                var node = queue.shift();
                avg += node.val;
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            avg = avg / size;
            data.push(avg);
        }

        // Store the previous layer

        if (!nodes || nodes[0] === null) return null;

        let arr = [nodes[0]];
        let cur = [],
            prev = [];

        console.log(nodes);
        // return root;

        /* 
var averageOfLevels = function(root) {
    function BFS(start){
        var queue = [start];
        var data = [];
        while (queue.length){
            var size = queue.length;
            var avg = 0;
            for (var i = 0; i < size; i++){
                var node = queue.shift();
                avg += node.val;
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            avg = avg / size;
            data.push(avg);
        }
        return data;
    }
    return BFS(root);
    
};
*/
    }
}

TreeNode.TreeNodeBuilder([3, 2, 3, null, 3, null, 1]);

export namespace Utils {
    export function perfMeasure(fn: Function, ...params: any[]) {
        let t0 = performance.now();
        let result = fn(...params);
        let t1 = performance.now();
        console.log("Result: ", result);
        console.log("It takes " + (t1 - t0).toFixed(3) + " milliseconds.");
    }
}
