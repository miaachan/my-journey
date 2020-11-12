/* 
    Record each level's common ancestor
    get p & q's depth (level)


    6,4 ==> 5 (上一層)
    6,2 ==> 5 (上一層)
    2,4 ==> 2 (自己)
    7,4 ==> 2

    Q: Level分到, 點分邊粒Node?
    ==> Need to know if belongs to the same branch, HOW?
        ==> IF NOT BELONGS TO THE SAME BRANCH => RETURN ITS UPPER ANCESTOR
        ==> STORE EACH NODE'S ANCESTOR IN THE HASHMAP
*/
function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
): TreeNode | null {
    if (root === null) return null;

    let nodesAncestor = new Map();
    let pDepth = -1,
        qDepth = -1;
    dfs(root, 0, root);

    if (pDepth === 0 || qDepth === 0) return root;
    if (Math.abs(pDepth - qDepth) === 1) {
        if (nodesAncestor.get(p?.val) === q) return q;
        if (nodesAncestor.get(q?.val) === p) return p;
    }

    let pPtr = p?.val;
    let qPtr = q?.val;
    let pAncestors: TreeNode[] = [];
    let qAncestors: TreeNode[] = [];

    while (pDepth > 0) {
        pAncestors.push(nodesAncestor.get(pPtr));
        pPtr = nodesAncestor.get(pPtr).val;
        pDepth--;
    }

    while (qDepth > 0) {
        qAncestors.push(nodesAncestor.get(qPtr));
        qPtr = nodesAncestor.get(qPtr).val;
        qDepth--;
    }
    p && pAncestors.push(p);
    q && qAncestors.push(q);

    console.log(pAncestors);
    console.log(qAncestors);

    return pAncestors.length > qAncestors.length
        ? pAncestors.reduceRight(
              (bingo, cur, index) =>
                  cur ===
                  qAncestors[
                      qAncestors.length - 1 - (index - pAncestors.length - 1)
                  ]
                      ? cur
                      : bingo,
              new TreeNode(0)
          )
        : qAncestors.reduceRight(
              (bingo, cur, index) =>
                  cur ===
                  pAncestors[
                      pAncestors.length - 1 - (index - pAncestors.length - 1)
                  ]
                      ? cur
                      : bingo,
              new TreeNode(0)
          );

    function dfs(node: TreeNode | null, depth: number, ancestor: TreeNode) {
        if (node === null) return;
        if (node.val === p?.val) pDepth = depth;
        if (node.val === q?.val) qDepth = depth;
        nodesAncestor.set(node.val, ancestor);
        if (pDepth !== -1 && qDepth !== -1) return;
        dfs(node.left, depth + 1, node);
        dfs(node.right, depth + 1, node);
    }
}
