/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    /**
     *      Tree(n) = f(1) + f(2) + ... + f(n)
     *      -   where Tree(n) is the number of combinations with `n` nodes 
     * 
     *      root: 1 node
     *      left: j nodes
     *      right: i - j - 1 nodes
     * 
     *      f(i) = Tree(left) * Tree(right)
     *      -   where f(i) is the number of nodes with `i` as root.
     *
     *      Tree(3) = T(0) * T(2) + T(1) * T(1) + T(2) * T(0) = 5
     */
    let dp = Array(n + 1).fill(0);
    dp[0] = dp[1] = 1;
    for (let i = 2; i <= n; ++i) {
        for (let j = 0; j < i; ++j) {
            dp[i] += dp[j] * dp[i - j - 1];
        }
    }

    // console.log(dp);
    return dp[n];
};

numTrees(3);