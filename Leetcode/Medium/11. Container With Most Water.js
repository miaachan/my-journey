/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0, r = height.length - 1;
    let _maxArea = 0;
    while (l < height.length && r >= 0) {
        let curArea = Math.min(height[l], height[r]) * (r - l);
        _maxArea = Math.max(curArea, _maxArea);

        if (height[l] < height[r]) l++;
        else r--;
    }
    return _maxArea;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);