/*
 * @lc app=leetcode id=71 lang=typescript
 *
 * [71] Simplify Path
 */

// @lc code=start
function simplifyPath(path: string): string {
    let _path = path.split("/");
    let stack = [];
    for (let p of _path) {
        switch (p) {
            case "":
                break;
            case ".":
                break;
            case "..":
                stack.pop();
                break;
            default:
                stack.push(p);
        }
    }

    let res = "";
    for (let p of stack) res += `/${p}`;

    return res.length > 0 ? res : "/";
}
// @lc code=end
