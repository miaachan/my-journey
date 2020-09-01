/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

//  2d dp
var findTargetSumWays = function (nums, S) {
    // return null if sum(nums) < target;
    if (nums.reduce((accu, cur) => (accu += cur)) < S) return 0;

    let dp = Array.from(Array(nums.length + 1), () => ({}));
    dp[0] = { 0: 1 };

    for (let i = 0; i < nums.length; ++i) {
        for (_ in dp[i]) {
            let key = parseInt(_);
            let plus = key + nums[i];
            let minus = key - nums[i];

            dp[i + 1][plus] =
                isExist(dp[i][plus - nums[i]]) + isExist(dp[i][plus + nums[i]]);

            dp[i + 1][minus] =
                isExist(dp[i][minus - nums[i]]) +
                isExist(dp[i][minus + nums[i]]);
        }
    }
    console.log(isExist(dp[nums.length][S]));
    return isExist(dp[nums.length][S]);

    function isExist(v) {
        return v ? v : 0;
    }
};

//  Brute force = =
/* var findTargetSumWays = function (nums, S) {
    if (nums.length === 1 && (nums[0] === S || -nums[0] === S)) return 1;
    // return null if sum(nums) < target;
    if (nums.reduce((accu, cur) => (accu += cur)) < S) return 0;

    let comb = Array.from(Array(nums.length), () => []);
    comb[0] = [nums[0], -nums[0]];
    let count = 0;

    for (let i = 1; i < comb.length; ++i) {
        for (let j = 0; j < comb[i - 1].length; ++j) {
            if (i === comb.length - 1) {
                if (comb[i - 1][j] + nums[i] === S) count++;
                if (comb[i - 1][j] - nums[i] === S) count++;
            } else {
                comb[i].push(
                    comb[i - 1][j] + nums[i],
                    comb[i - 1][j] - nums[i]
                );
            }
        }
    }
    return count;
}; */

findTargetSumWays([1, 1, 1, 1, 1], 3);
findTargetSumWays([1, 0], 1);
