/**
 * @param {number[]} nums
 * @return {number}
 */


/*
    My 1st sol

    [2], [1], [3], [4]
    dp 隔1, 再check前兩步
*/
var rob = function (nums) {
    let dp = [];
    let yolo = 0;

    for (let i = 0; i < nums.length; i++) {
        let max = Math.max(
            (dp[i - 3] ? dp[i - 3] : 0),
            (dp[i - 2] ? dp[i - 2] : 0)
        );
        dp[i] = max + nums[i];

        if (dp[i] > yolo) yolo = dp[i];
    }
    console.log(dp);
    return yolo;
}; 


/* a more simplify (really? maybe) version using dp
var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[dp.length - 1];
}; */

rob([2, 1, 1, 2]);
rob([2, 7, 9, 3, 1]);


