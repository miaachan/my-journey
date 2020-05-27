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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {

    let res = 0;
    dfs(root);
    console.log(res);
    return res;

    function dfs(node) {
        if (node === null) return 0;

        let left = dfs(node.left);
        let right = dfs(node.right);
        res = Math.max(res, left + right);

        return Math.max(left, right) + 1;
    }

};

/* 
          1
         / \
        2   3
       / \     
      4   5  

1: left: 2, right: 1                              => return 4 (nothing here)
        2: left: 1, right: 1, return 2
                4: left = 0, right = 0, return 1
*/


// console.log(
//     diameterOfBinaryTree({ "val": 1, "left": { "val": 2, "left": { "val": 4, "left": null, "right": null }, "right": { "val": 5, "left": null, "right": null } }, "right": { "val": 3, "left": null, "right": null } })
// )


console.log(
    diameterOfBinaryTree({ "val": 1, "left": { "val": 2, "left": { "val": 4, "left": null, "right": null }, "right": null }, "right": { "val": 3, "left": null, "right": null } })
)