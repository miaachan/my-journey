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
    root: any | null,
    p: any | null,
    q: any | null
): any | null {
    // let commonAncestor: number[] = [];


    let nodesAncestor = new Map();
    let pDepth = -1,
        qDepth = -1;
    dfs(root, 0, root.val);

    if (pDepth >= qDepth) {
        let ancestor = nodesAncestor.get(p.val);
        console.log(ancestor)

        if(pDepth === qDepth ancestor === )
        
    }



    console.log(pDepth, qDepth);
    console.log(nodesAncestor);

    function dfs(node, depth, ancestor: number) {
        if (node === null) return;
        if (node.val === p.val) pDepth = depth;
        if (node.val === q.val) qDepth = depth;
        nodesAncestor.set(node.val, ancestor);
        if (pDepth !== -1 && qDepth !== -1) return;

        dfs(node.left, depth + 1, node.val);
        dfs(node.right, depth + 1, node.val);
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
