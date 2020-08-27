/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function (pre, post) {
    /**
     *
     * Preorder:    root,(left),(right) <---
     * In-order:    (left),root,(right)
     * Post-order:  (left),(right),root <---
     *
     * Ideas:
     * Find root --> next to the root must belongs to (Left) for preorder,
     * located the same value on postorder (as no duplicate)
     * mark it as the split points
     *
     *  !   L                               L              !
     * [1, (2, 4, 5), (3, 6, 7)]    [(4, 5, 2), (6, 7, 3), 1]   --> root = 1, leftLength = 3
     *
     *  !   L              L      !     (left sub-tree)
     * [2, (4), 5]       [(4), 5, 2]    --> root = 2, leftLength = 1
     *
     * repeat the process
     */

    console.log(JSON.stringify(builder(0, 0, pre.length)));
    return builder(0, 0, pre.length);

    /**
     *
     * @param {number} i starting index of the left-subtree for pre-order sequence
     * @param {number} j starting index of the left-subtree for post-order sequence
     */
    function builder(i, j, length) {
        if (length <= 0) return null;
        let root = {
            val: pre[i],
            left: null,
            right: null,
        };
        if (length === 1) return root;

        let postLeftMark = j;
        // Locate the `L` of postorder
        while (post[postLeftMark] !== pre[i + 1]) postLeftMark += 1;
        // length of the left-subtree
        let leftSubtreeLength = postLeftMark - j + 1;

        root.left = builder(i + 1, j, leftSubtreeLength);
        root.right = builder(
            i + 1 + leftSubtreeLength,
            postLeftMark + 1,
            length - leftSubtreeLength - 1
        );
        return root;
    }
};

constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]);
