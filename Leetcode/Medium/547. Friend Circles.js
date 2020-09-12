/**
 * @param {number[][]} M
 * @return {number}
 */

//  Similar to Q200. Number of Islands
var findCircleNum = function (M) {
    // create an array to check if the current student has been visited before
    let visited = Array(M.length).fill(0);
    let ans = 0;

    for (let i = 0; i < M.length; ++i) {
        // skip if visited before
        if (visited[i]) continue;
        // the previous students have no intersection (direct / in-direct) with the current student if the visited[i] is 0
        dfs(i);
        ans += 1;
    }
    return ans;

    function dfs(cur) {
        // Base case, if the current node has been visited before, skip it.
        if (visited[cur]) return;
        // mark as visited
        visited[cur] = 1;
        for (let j = 0; j < M.length; ++j) {
            // if j is a friend of current
            if (!visited[j] && M[cur][j]) {
                dfs(j);
            }
        }
    }
};

let input = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
];

findCircleNum(input);
