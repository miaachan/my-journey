/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
    if (t1 == null) {
        return t2;
    }
    if (t2 == null) {
        return t1;
    }
    t1.val += t2.val;

    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);

    return t1;
};



/* var mergeTrees = function (t1, t2) {
    if (t1 == null || t2 == null) {
        if (t2) t1 = t2;
    } else if (t1 && t2) {
        t1.val += t2.val;
    }


    mergeTrees(t1.left, t2.left);
    mergeTrees(t1.right, t2.right);

    return t1;
}; */







let a = mergeTrees({ "val": 1, "left": { "val": 3, "left": { "val": 5, "left": null, "right": null }, "right": null }, "right": { "val": 2, "left": null, "right": null } },
    { "val": 2, "left": { "val": 1, "left": null, "right": { "val": 4, "left": null, "right": null } }, "right": { "val": 3, "left": null, "right": { "val": 7, "left": null, "right": null } } }
)
console.log(a);