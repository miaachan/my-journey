import { TreeNode } from "../../lib";

/*
 * In-order serialization
 */
function serialize(root: TreeNode | null): string {
    if (!root) return null;
    let left_subtrees = serialize(root.left);
    let right_subtrees = serialize(root.right);
    return root.val + "," + left_subtrees + "," + right_subtrees;
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    if (data === null) return null;
    let ptr = 0;
    let nodes = data.split(",");
    return helper();

    function helper(): TreeNode | null {
        if (nodes[ptr] === "null") return null;
        let cur = new TreeNode(parseInt(nodes[ptr]));
        ptr += 1;
        cur.left = helper();
        ptr += 1;
        cur.right = helper();
        return cur;
    }
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

deserialize(serialize(TreeNode.TreeNodeBuilder([1, 2, 3, null, null, 4, 5])));
