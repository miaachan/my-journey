function canReach(arr: number[], start: number): boolean {
    let mem = Array(arr.length).fill(false);
    return helper(start);

    function helper(cur) {
        // Return false if the current index has been reached before
        if (cur < 0 || cur >= arr.length || mem[cur]) return false;
        // reach target `0`
        if (arr[cur] === 0) return true;
        mem[cur] = true;
        return helper(cur + arr[cur]) || helper(cur - arr[cur]);
    }
}

canReach([4, 2, 3, 0, 3, 1, 2], 5);
