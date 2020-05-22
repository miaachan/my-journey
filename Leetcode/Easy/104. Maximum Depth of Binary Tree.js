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

var maxDepth = function (root) {
    if (root == null) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return Math.max(left, right) + 1;
};


/* 

    3
   / \
  9  20
    /  \
   15   7

   2: L-> 9, left = 0, right = 0, return 0+1 = 1;
        left = 1;
    
   R->20, left = 1, right = 1, return 1+1 = 2;

   Math.max(1,2) + 1 = 3;

*/

/* 

var maxDepth = function (root) {
    if (root == null) return 0;

    return Math.max(recursive(root.left, 2), recursive(root.right, 2));
};

let recursive = function (node, depth) {
    if (node == null) {
        return depth - 1;
    }
    return Math.max(recursive(node.left, depth + 1), recursive(node.right, depth + 1))

} 

*/
