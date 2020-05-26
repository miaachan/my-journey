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
 * @param {number} sum
 * @return {number}
 */


// O(n) solution from https://caomingkai.github.io/2019/01/12/437-Path-Sum-III-JS/
let pathSum = function (root, sum) {
    let count = 0;
    let map = new Map();
    map.set(0, 1);
    dfs(root, 0);
    return count;


    function dfs(node, curSum) {
        if (node === null) return;

        curSum += node.val;

        let counterpart = curSum - sum;
        if (map.has(counterpart)) count += map.get(counterpart);

        if (!map.has(curSum)) map.set(curSum, 0);
        map.set(curSum, map.get(curSum) + 1);

        dfs(node.left, curSum);
        dfs(node.right, curSum);

        map.set(curSum, map.get(curSum) - 1);
    }
};


/* double recursion (easier to understand)

var pathSum = function (root, sum) {
    if (root == null) return 0;
    return traverseNodes(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};

let traverseNodes = (node, sum) => {
    if (node == null) return 0;
    let res = 0;

    if (node.val === sum) res++;
    res += traverseNodes(node.left, sum - node.val);
    res += traverseNodes(node.right, sum - node.val);

    return res;
}; */


let tree = { "val": 10, "left": { "val": 5, "left": { "val": 3, "left": { "val": 3, "left": null, "right": null }, "right": { "val": -2, "left": null, "right": null } }, "right": { "val": 2, "left": null, "right": { "val": 1, "left": null, "right": null } } }, "right": { "val": -3, "left": null, "right": { "val": 11, "left": null, "right": null } } };

console.log(
    pathSum(tree, 8)
)



/*

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
let tree = { "val": 10, "left": { "val": 5, "left": { "val": 3, "left": { "val": 3, "left": null, "right": null }, "right": { "val": -2, "left": null, "right": null } }, "right": { "val": 2, "left": null, "right": { "val": 1, "left": null, "right": null } } }, "right": { "val": -3, "left": null, "right": { "val": 11, "left": null, "right": null } } };

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11

1) Create a map


*/