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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    /**
     * 利用 Stack 的概念
     * if root !== null, curNode = rootNode
     * 
     * While stack is not empty & curNode !== null:
     *      只要leftNode !== null, 就推進Stack裡, 重覆至沒有leftNode為止 (curNode === null)
     * 
     * curNode = stack.pop(); 把stack頂的node assign到curNode
     * 然後往 ans[] 裡推 curNode.val
     * 
     * curNode = curNode.right, iterate again.
     * 
     * return ans
     */
    if (root === null) return [];
    let ans = [], stack = [];
    let curNode = root;
    while (curNode !== null || stack.length > 0) {
        while (curNode !== null) {
            stack.push(curNode);
            curNode = curNode.left;
        }
        curNode = stack.pop();
        ans.push(curNode.val);
        curNode = curNode.right;
    }

    return ans;
};

// recursion apporach
// var inorderTraversal = function (root) {
//     let ans = []
//     dfs(root)
//     console.log(ans)

//     function dfs(node) {
//         if (node === null) return;
//         dfs(node.left);
//         ans.push(node.val);
//         dfs(node.right);
//     }
// };

let treeNode = { "val": 1, "left": null, "right": { "val": 2, "left": { "val": 3, "left": null, "right": null }, "right": null } };
inorderTraversal(treeNode);