/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    /**
     *
     * Preorder:    root,(left),(right) <---
     * In-order:    (left),root,(right) <---
     * Post-order:  (left),(right),root
     *
     * preorder = [3,9,20,15,7]
     * inorder = [9,3,15,20,7]
     *
     * Note: You may assume that duplicates do not exist in the tree.
     *
     * Ideas:
     * Preorder: Find root -->  root (left) (right)
     *      next to the root must belongs to (left)
     *
     * In-order: Find root -->  (left) root (right)
     *      we can split by root to obtain left & right sub tree
     *
     *  !                         L    !
     * [3, 9, 20, 15, 7]        [(9), 3, (15, 20, 7)]
     *  --> root = 3, left (9), right (15, 20, 7)
     *
     */

    console.log(JSON.stringify(builder(0, 0, preorder.length)));
    return builder(0, 0, preorder.length);

    function builder(i, j, length) {
        if (length <= 0) return null;
        let root = {
            val: preorder[i],
            left: null,
            right: null,
        };
        if (length === 1) return root;
        let inRootMark = j;
        while (inorder[inRootMark] !== preorder[i]) inRootMark += 1;
        // length of the left-subtree
        let leftSubtreeLength = inRootMark - j;

        root.left = builder(i + 1, j, leftSubtreeLength);
        root.right = builder(
            i + leftSubtreeLength + 1,
            inRootMark + 1,
            length - leftSubtreeLength - 1
        );
        return root;
    }
};

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);

/* 

    3
   / \
  9  20
    /  \
   15   7

*/
