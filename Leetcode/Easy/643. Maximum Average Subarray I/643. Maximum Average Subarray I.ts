function findMaxAverage(nums: number[], k: number): number {
    let sum_to = [0];
    for (let num of nums) sum_to.push(sum_to[sum_to.length - 1] + num);
    let max_average = Number.NEGATIVE_INFINITY;

    let l = 1;
    while (l + k - 1 < sum_to.length) {
        let cur_sum = sum_to[l + k - 1] - sum_to[l - 1];
        max_average = Math.max(max_average, cur_sum / k);
        l++;
    }
    return max_average;
}

findMaxAverage([1, 12, -5, -6, 50, 3], 4);
