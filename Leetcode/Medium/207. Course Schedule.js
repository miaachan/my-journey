/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let graph_ = Array.from(Array(numCourses), () => []);
    // 0 = Unknown, 1 = Visiting, 2 = Visited
    let statusMem = Array(numCourses).fill(0);

    prerequisites.forEach((v) => {
        graph_[v[0]].push(v[1]);
    });

    for (let i = 0; i < numCourses; ++i) {
        // true = deadlock
        if (dfs(i)) return false;
    }
    // console.log(graph_);
    // console.log(statusMem);
    return true;

    function dfs(cur) {
        // Use memory to check base case
        if (statusMem[cur] === 1)
            return true; /* Deadlock, since the current node is already marked as Visiting */
        if (statusMem[cur] === 2) return false; /* Visited */

        statusMem[cur] = 1; /* Mark current node as visiting */
        for (let i = 0; i < graph_[cur].length; ++i) {
            if (dfs(graph_[cur][i])) return true; /* Deadlock */
        }
        statusMem[cur] = 2;
        return false;
    }
};

canFinish(2, [[1, 0]]);
canFinish(2, [
    [1, 0],
    [0, 1],
]);

canFinish(8, [
    [1, 0],
    [2, 6],
    [1, 7],
    [6, 4],
    [7, 0],
    [0, 5],
]);
