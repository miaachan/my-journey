/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    /**
     * pre-order dfs put all node into an Array
     * modify the original root after dfs
     */
    if (root === null) return;
    let preorder = [];

    dfs(root);
    // remove the first one as it equals to root.val
    preorder.shift();
    root.left = null;
    while (preorder.length > 0) {
        root.right = new TreeNode(preorder.shift(), null, null);
        root = root.right;
    }

    function dfs(node) {
        if (node === null) return;
        preorder.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
};

flatten({
    val: 1,
    left: {
        val: 2,
        left: { val: 3, left: null, right: null },
        right: { val: 4, left: null, right: null },
    },
    right: { val: 5, left: null, right: { val: 6, left: null, right: null } },
});

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
