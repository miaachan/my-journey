/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "../lib";

function rob(root: TreeNode | null): number {
    // bfs but add a cooldown state;
    function dfs(root: TreeNode, curAmount: number, cooldown: boolean): void {
        if (!root) return;

        let v = 0;
        // no cooldown
        if (!cooldown) {
            root.left && (v += root.left.val);
            root.right && (v += root.right.val);
        }

        dfs(root.left, )



        dfs(root.left, curAmount, !cooldown);
        dfs(root.right, !cooldown);
    }

    return 0;
}

[3, 2, 3, null, 3, null, 1];
