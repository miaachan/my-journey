function maxPower(s: string): number {
    let maxPower = 1;
    let prev = 0; // s[0]

    let i = 1;
    while (i < s.length) {
        let curPower = 1;
        while (s[i] === s[prev]) {
            ++curPower;
            ++i;
        }
        maxPower = Math.max(maxPower, curPower);
        prev = i++;
    }

    return maxPower;
}
