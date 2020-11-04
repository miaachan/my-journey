function findMinHeightTrees(n: number, edges: number[][]): number[] {
    let map = new Map<number, Set<number>>(Array.from(Array(n), () => new Set<number>()).entries());

    // Store how many adj vertices each node hold
    for (let edge of edges) {
        map.get(edge[0])?.add(edge[1]);
        map.get(edge[1])?.add(edge[0]);
    }

    // Store the outer leaves (for those who has only one neighbor)
    let leaves: number[] = [];
    for (let i = 0; i < n; ++i) {
        if (map.get(i)?.size === 1) leaves.push(i);
    }

    // a graph can only have at most 2 MHTs
    while (n > 2) {
        // Eat the outer leaves every time till only the roots left.
        n -= leaves.length;
        let newLeaves: number[] = [];
        for (let leaf of leaves) {
            let neighbor = map.get(leaf)?.values().next().value; //done
            map.get(neighbor)?.delete(leaf);
            map.delete(leaf);

            // We check if the neighbor becomes alone after its buddy is being eaten.
            if (map.get(neighbor)?.size === 1) newLeaves.push(neighbor);
        }
        leaves = newLeaves;
    }

    return [...map.keys()];
}
