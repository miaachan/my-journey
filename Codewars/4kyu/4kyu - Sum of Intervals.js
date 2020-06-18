/* 
        4kyu - Sum of Intervals
        https://www.codewars.com/kata/sum-of-intervals/train/javascript
*/

function sumIntervals(intervals) {
    let list = intervals.sort((a, b) => a[0] - b[0])
        .reduce((accu, cur) => {
            console.log(accu, cur);
            if (accu.length) {
                let flag = (accu.some(ele => {
                    if (cur[0] >= ele[0] && cur[1] <= ele[1]) return true;
                })) ? true : false;
                if (flag) return accu;
            }
            accu.push(cur);
            return accu;
        }, []);

    for (let i = 0; i < list.length; i++) {
        while (i + 1 < list.length && list[i][1] >= list[i + 1][0] && list[i][1] <= list[i + 1][1]) {
            list[i][1] = list[i + 1][1];
            list.splice(i + 1, 1);
        }
    }

    return list.reduce((accu, cur) => accu += (cur[1] - cur[0]), 0);
}


sumIntervals([
    [1, 20], [10, 20], [1, 6], [16, 19], [5, 11]
]);