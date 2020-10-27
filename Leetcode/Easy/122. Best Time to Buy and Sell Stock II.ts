function maxProfit(prices: number[]): number {
    let dp = Array.from(Array(2), () => Array(prices.length + 1).fill(0));
    // init state
    dp[1][0] = Number.NEGATIVE_INFINITY;

    // two states: No Stock & Holding Stock
    // dp[0] indicates the state with no stock holding
    // dp[1] indicates the state with stock holding

    for (let i = 1; i <= prices.length; ++i) {
        // the `i` day, `prices` need to be aligned since index starts at 0
        dp[0][i] = Math.max(dp[0][i - 1], dp[1][i - 1] + prices[i - 1]);
        dp[1][i] = Math.max(dp[1][i - 1], dp[0][i - 1] - prices[i - 1]);
    }

    return dp[0][prices.length];
}
