function longestMountain(A: number[]): number {
    let max = 0;
    let curMax = 1;
    let direction = 1;
    for (let i = 1; i < A.length; ++i) {
        if (direction && A[i] > A[i - 1]) curMax++;
        else if (!direction && A[i] < A[i - 1]) curMax++;
        else if (direction && curMax > 1 && A[i] < A[i - 1]) {
            curMax++;
            direction = 0;
        } else if (!direction && A[i] > A[i - 1]) {
            curMax = 2;
            direction = 1;
        } else {
            curMax = 1;
            direction = 1;
        }

        if (curMax >= 3 && !direction) max = Math.max(max, curMax);
    }

    return max;
}

longestMountain([2, 1, 4, 7, 3, 2, 5]);
