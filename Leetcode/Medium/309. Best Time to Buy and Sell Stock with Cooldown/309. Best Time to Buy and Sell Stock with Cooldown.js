/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let hold, sold, rest;
    hold = [Number.MIN_SAFE_INTEGER, ...Array(prices.length).fill(0)];
    sold = Array(prices.length + 1).fill(0);
    rest = Array(prices.length + 1).fill(0);

    for (let i = 1; i < prices.length + 1; ++i) {
        hold[i] = Math.max(hold[i - 1], rest[i - 1] - prices[i - 1]);
        sold[i] = hold[i - 1] + prices[i - 1];
        rest[i] = Math.max(rest[i - 1], sold[i - 1]);
    }

    return Math.max(sold[prices.length], rest[prices.length]);
};

console.log(
    maxProfit([1, 2, 3, 0, 2])
)
