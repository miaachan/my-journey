// 1748. Sum of Unique Elements
function sumOfUnique(nums: number[]): number {
    let map = new Map();
    let sum = 0;

    for (let num of nums) {
        if (map.has(num)) {
            if (map.get(num) === 1) {
                sum -= num;
                map.set(num, 2);
            }
        } else {
            map.set(num, 1);
            sum += num;
        }
    }
    return sum;
}

// 5658. Maximum Absolute Sum of Any Subarray
function maxAbsoluteSum(nums: number[]): number {
    let max_abs_sum = Number.MIN_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0, running = 0; i < nums.length; ++i) {
        running += nums[i];
        max = Math.max(max, running);
        min = Math.min(min, running);
    }

    let running_sum = 0;
    for (let num of nums) {
        running_sum += num;
        max_abs_sum = Math.max(
            max_abs_sum,
            Math.abs(running_sum),
            Math.abs(running_sum - max),
            Math.abs(running_sum - min)
        );
    }

    return max_abs_sum;
}

// 5659. Minimum Length of String After Deleting Similar Ends
function minimumLength(s: string): number {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        let start = s[left];
        let end = s[right];

        if (start === end) {
            left++;
            right--;
            while (start === s[left] && left <= right) left++;
            while (end === s[right] && left <= right) right--;
            continue;
        }
        break;
    }

    return right - left + 1;
}
