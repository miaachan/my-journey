var maxSequence = function (arr) {
    let dp = [];
    dp[0] = (arr.length) ? arr[0] : 0;
    for (let i = 1; i < arr.length; i++) {
        dp[i] = arr[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    }
    return Math.max(...dp, 0);
}