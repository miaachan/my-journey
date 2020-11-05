function minCostToMoveChips(position: number[]): number {
    let odd = 0, even = 0;
    position.forEach(v => v % 2 === 0 ? ++even : ++odd);
    return Math.min(odd, even);
};