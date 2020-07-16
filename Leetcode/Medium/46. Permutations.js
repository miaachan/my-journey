/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let ans = [];
    let used = Array(nums.length).fill(false);

    const dfs = (depth, len, cur) => {
        if (depth === len) {
            ans.push([...cur]);
            return;
        }

        for (let i = 0; i < len; i++) {
            if (used[i]) continue;
            used[i] = true;
            cur.push(nums[i]);
            dfs(depth + 1, len, cur, used);
            cur.pop();
            used[i] = false;
        }
    }

    dfs(0, nums.length, []);
    return ans;
};

console.log(
    permute([1, 2, 3])
)

/*
1,2,3

i0: used = [1, 0, 0], cur = [1], dfs (d=0+1)
    ....
    i2: used = [1, 1, 1], cur = [1,2,3], dfs (d=2+1)
        d=3, match our desire length => push to ans[] & return
    <>  used = [1, 1, 0], cur = [1,2]

i1:  used = [0, 1, 0], cur = [2], dfs (d=0+1)
    i0:  used = [1, 1, 0], cur = [2, 1], dfs (d=1+1)
        i0: used[0] = true > continue
        i1: used[1] = true > continue
        i2: used = [1, 1, 1], cur = [2, 1, 3], dfs (d=2+1)
            d=3, match our desire length => push to ans[] & return
        <> used = [0, 1, 0], pop => cur = [2], end this round
    i1: used[1] = true > continue
    i2: used = [0, 1, 1], cur = [2, 3], dfs (d=1+1)
        i0: used = [1, 1, 1], cur = [2, 3, 1], dfs (d=2+1)
            d=3, match our desire length => push to ans[] & return
        <> used = [0, 1, 1], cur = [2, 3], end this round
        i1: used[1] = true > continue
        i2: used[2] = true > continue
    <>  used = [0, 1, 0], cur = [2], end this round
<>  used = [0, 0, 0], cur = [], end this round
i2:  used = [0, 0, 1], cur = [3], dfs (d=0+1)
    i0: used = [1, 0, 1], cur = [3, 1], dfs(d=1+1)
        i0: used[0] = true > continue
        i1: used = [1, 1, 1], cur = [3,1,2], dfs(d=2+1)
            d=3, match our desire length => push to ans[] & return
        <>  used = [1, 0, 1], cur = [3,1], end this round
        i2: used[2] = true > continue
    <>  used = [0, 0, 1], cur = [3], end this round
    i1: used = [0, 1, 1], cur = [3, 2], dfs(d=1+1)
        i0: used = [1,1,1], cur = [3,2,1], dfs(d=2+1)
            d=3, match our desire length => push to ans[] & return
        <>  used = [0, 1, 1], cur = [3,2], end this round
        i1: used[1] = true > continue
        i2: used[2] = true > continue
    <>  used = [0, 0, 1], cur = [3], end this round
    i2: used[2] = true > continue
<>  used = [0,0,0], cur = [], end this round
*/
