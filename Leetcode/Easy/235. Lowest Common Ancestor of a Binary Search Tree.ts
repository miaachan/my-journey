/*
 * @lc app=leetcode id=235 lang=typescript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

// @lc code=start
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {

    let p_val = p.val;
    let q_val = q.val;
    return dfs(root);

    function dfs(node: TreeNode | null) {
        if (!node) return node;

        if (p_val > node.val && q_val > node.val) {
            return dfs(node.right);
        } else if (p_val < node.val && q_val < node.val) {
            return dfs(node.left);
        } else {
            // We find the split point
            return node;
        }
    }
    
	
};
// @lc code=end

