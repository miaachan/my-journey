/*
        7kyu - Training JS #39: Regular Expression--"?", "*", "+" and "{}"
        https://www.codewars.com/kata/training-js-number-39-regular-expression-star-plus-and-%7B%7D/train/javascript
*/

let regex = /^-?9\d*(0){4,}$/

/*
regex.test("90000") , true);
regex.test("-90000") , true);
regex.test("900000000") , true);
regex.test("91230000") , true);
regex.test("-91230000") , true);
regex.test("190000") , false);
regex.test("90001") , false);
regex.test("9000") , false);
regex.test("91230") , false);
regex.test("1-90000") , false);
regex.test("-90000123") , false);
*/
