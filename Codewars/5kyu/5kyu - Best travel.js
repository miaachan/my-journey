/* 
        5kyu - Best travel
        https://www.codewars.com/kata/best-travel/train/javascript
*/

/* 
        Recursive apporach.
        [50, 55, 56, 57, 58] & k = 3
    ==> [50]
    ==> [50, 55]
    ==> [50, 55, 56] ==> match (path.length == k) ==> Cal the sum and store it ==> return
    ==> [50, 55] due to path.pop()
    ==> [50, 55, 57] ==> match (path.length == k) ==> Cal the sum and store it ==> return
    ==> [50, 55] due to path.pop()

    repeat above until the i of outter for loop reach ls.length.
*/

function chooseBestSum(t, k, ls) {
    // t = total travel distance, k = places to travel, ls = list of distances
    if (ls.length < k) return null;
    let bestSum = 0;

    const cal = (t, k, ls, ind, path) => {
        if (path.length == k) {
            let sum = path.reduce((total, val) => total + val, 0)
            if (sum <= t) bestSum = Math.max(bestSum, sum);
            return;
        }
        for (let i = ind; i < ls.length; i++) {
            path.push(ls[i]);
            cal(t, k, ls, i + 1, path);
            path.pop();
        }
    }

    cal(t, k, ls, 0, []);
    return bestSum == 0 ? null : bestSum;
}

// const mocha = require('mocha')
// const describe = mocha.describe
// const it = mocha.it
const assert = require('chai').assert
const Test = require('mocha')


Test.describe("chooseBestSum",function() {
    Test.it("Basic tests ",function() {
      var ts = [50, 55, 56, 57, 58]
      assert.equal(chooseBestSum(163, 3, ts), 163)
      ts = [50]
      assert.equal(chooseBestSum(163, 3, ts), null)
      ts = [91, 74, 73, 85, 73, 81, 87]
      assert.equal(chooseBestSum(230, 3, ts), 228)
  })})