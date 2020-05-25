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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (root == null) {
        return null;
    }
    let right = invertTree(root.right);
    let left = invertTree(root.left);
    root.right = left;
    root.left = right;
    return root;
};

/* 
     4
   /   \
  2     7
 / \   / \
1   3 6   9

right (7):
    right(9):
    right = 9;
    left = 6;
    swap
           7
          / \
         9   6
*/


/*
my 1st attempt, might seem a bit messy but work :D (lol)

var invertTree = function (root) {
    if (root == null) {
        return root;
    }
    if (root.left || root.right) {
        let temp = root.right;
        root.right = root.left;
        root.left = temp;
        invertTree(root.left);
        invertTree(root.right);
    }

    return root;
}; */