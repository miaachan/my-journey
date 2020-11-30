// Monotonic Queue
function maxSlidingWindow(nums: number[], k: number): number[] {
    let output: number[] = [];
    // incomplete std lib of js, use array to simulate LL instead, unlike LL, Array::shift() takes O(n)
    let queue: number[] = [];

    for (let i = 0; i < nums.length; ++i) {
        while (queue.length > 0 && queue[queue.length - 1] < nums[i]) {
            queue.pop();
        }
        queue.push(nums[i]);

        // i + 1 - k >= 0, the leftmost of the windows
        let j = i + 1 - k;
        if (j >= 0) {
            output.push(queue[0]);
            // Here shift() takes O(k)
            if (nums[j] === queue[0]) queue.shift();
        }
    }

    return output;
}

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
