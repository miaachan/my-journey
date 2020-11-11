/* 
    Record each level's common ancestor
    get p & q's depth (level)


    6,4 ==> 5 (上一層)
    6,2 ==> 5 (上一層)
    2,4 ==> 2 (自己)
    7,4 ==> 2

    Q: Level分到, 點分邊粒Node?
*/

function lowestCommonAncestor(
    root: any | null,
    p: any | null,
    q: any | null
): any | null {
    let commonAncestor: number[] = [];
    let pDepth = -1,
        qDepth = -1;
    dfs(root, 0);
    console.log(pDepth, qDepth);

    function dfs(node, depth) {
        if (node === null) return;
        if (node.val === p.val) pDepth = depth;
        if (node.val === q.val) qDepth = depth;
        if (pDepth !== -1 && qDepth !== -1) return;

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
        // commonAncestor.push(node.val);
    }
}

lowestCommonAncestor(
    {
        val: 3,
        left: {
            val: 5,
            left: { val: 6, left: null, right: null },
            right: {
                val: 2,
                left: { val: 7, left: null, right: null },
                right: { val: 4, left: null, right: null },
            },
        },
        right: {
            val: 1,
            left: { val: 0, left: null, right: null },
            right: { val: 8, left: null, right: null },
        },
    },

    {
        val: 5,
        left: { val: 6, left: null, right: null },
        right: {
            val: 2,
            left: { val: 7, left: null, right: null },
            right: { val: 4, left: null, right: null },
        },
    },

    {
        val: 1,
        left: { val: 0, left: null, right: null },
        right: { val: 8, left: null, right: null },
    }
);
