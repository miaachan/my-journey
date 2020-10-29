function maxProduct(nums: number[]): number {
    if (nums.length === 0) return 0;

    let max = nums[0],
        runningMax = nums[0],
        runningMin = nums[0];

    // For any i, j, k, where j > i, (i * -k) is always greater than (j * -k)
    // Therefore, we need to store both current (the running) Maximum and Minimum as negative number could exist.
    // The minimum could always `turn over a new leaf` and become the maximum at any time.

    for (let i = 1; i < nums.length; ++i) {
        // Check for -ve, swap max & min
        if (nums[i] < 0) [runningMax, runningMin] = [runningMin, runningMax];
        runningMax = Math.max(runningMax * nums[i], nums[i]);
        runningMin = Math.min(runningMin * nums[i], nums[i]);

        max = Math.max(max, runningMax);
    }

    return max;
}
