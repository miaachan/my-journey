function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let can_place = 0;
    let counter = 0;

    for (let i = 0; i < flowerbed.length; ++i) {
        if (flowerbed[i] === 0) counter++;
        else {
            can_place += Math.floor(counter / 2);
            counter = -1;
        }
    }

    // the rightmost + 1 is not blocked, so plus one to the counter
    if (counter >= 1) can_place += Math.floor((counter + 1) / 2);

    return can_place >= n;
}
