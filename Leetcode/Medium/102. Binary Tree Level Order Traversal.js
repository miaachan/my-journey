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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let ans = [];
    dfs(root, 0);
    return ans;

    function dfs(node, depth) {
        if (node === null) return;
        // console.log(`Current depth: ${depth}, ${node.val}`);
        ans[depth] ? ans[depth].push(node.val) : (ans[depth] = [node.val]);
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }
};

levelOrder({
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null },
    },
});

// http://alrightchiu.github.io/SecondRound/binary-tree-traversalxun-fang.html#pre explain the differences between [pre, in, post-order]
