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
var averageOfLevels = function (root) {
    const ans = [];
    dfs(root, 0);
    return ans.map((v) => v.reduce((accu, cur) => (accu += cur)) / v.length);

    function dfs(node, depth) {
        if (node === null) return;
        ans[depth] ? ans[depth].push(node.val) : (ans[depth] = [node.val]);
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }
};

averageOfLevels({
    val: 3,
    left: {
        val: 9,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null },
    },
    right: { val: 20, left: null, right: null },
});

/* 
BFS solution from 80ms sample

var averageOfLevels = function(root) {
    function BFS(start){
        var queue = [start];
        var data = [];
        while (queue.length){
            var size = queue.length;
            var avg = 0;
            for (var i = 0; i < size; i++){
                var node = queue.shift();
                avg += node.val;
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            avg = avg / size;
            data.push(avg);
        }
        return data;
    }
    return BFS(root);
    
};
*/
