// Iterative Pre-order Traversal
function preorderTraversal(root: TreeNode | null): number[] {
    let res = [],
        stack = [];
    if (root) stack.push(root);

    while (stack.length > 0) {
        let node = stack.pop();
        if (node.right) stack.push(node.right);
        res.push(node.val);
        if (node.left) stack.push(node.left);
    }

    return res;
}


// potential issue: recursion stack overflow